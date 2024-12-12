import { Component, inject } from '@angular/core';
import { HttpClient , HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  imports: [HttpClientModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent{
  httpClient = inject(HttpClient);
  public data : Array<any> = [];

  ngOnInit() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.data = data;
        }, error: (err) => console.log(err)
      });
  }

  
}
