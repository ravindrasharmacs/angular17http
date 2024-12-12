import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , PostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular17http';
}
