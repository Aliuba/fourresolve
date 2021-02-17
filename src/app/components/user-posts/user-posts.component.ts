import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  user: User;
  posts: Post[];


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(value => this.user = this.router.getCurrentNavigation().extras.state as User);
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts = value);
  }

}
