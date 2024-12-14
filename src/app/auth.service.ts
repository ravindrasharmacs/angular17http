import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject , Observable , tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'https://api.restful-api.dev/objects'
  private currentUserSubject: BehaviorSubject<any> ;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || 'null'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

login(username :string , password : string): Observable<any> {
   return this.http.post<any>(`${this.API_URL}/login`, { username , password })
   .pipe(tap(user => {
     localStorage.setItem('currentUser', JSON.stringify(user));
     this.currentUserSubject.next(user);
   }));
   }
   logout() {
     localStorage.removeItem('currentUser');
     this.currentUserSubject.next(null);


   }

   isloggedIn() :boolean{
    return this.currentUserSubject.value != null;
   }

   getToken(): string | null {
    return this.currentUserSubject.value?.token || null;
   }

}
