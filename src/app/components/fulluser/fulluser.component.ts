import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/post';

@Component({
  selector: 'app-fulluser',
  templateUrl: './fulluser.component.html',
  styleUrls: ['./fulluser.component.css']
})
export class FulluserComponent implements OnInit {
  user: User;
  post: Post;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService: PostService) {
    this.activatedRoute.params.subscribe(value => this.user = this.router.getCurrentNavigation().extras.state as User);
  }


  ngOnInit(): void {
  }

  getPostsOfThisUser(): void {
    this.router.navigate(['posts'], {relativeTo: this.activatedRoute, state: this.user});
  }

}
