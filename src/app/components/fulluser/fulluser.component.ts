import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-fulluser',
  templateUrl: './fulluser.component.html',
  styleUrls: ['./fulluser.component.css']
})
export class FulluserComponent implements OnInit {
  user: User;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService: PostService) {
    this.activatedRoute.params.subscribe(value => this.user = this.router.getCurrentNavigation().extras.state as User);
  }


  ngOnInit(): void {
  }
  getPostsOfThisUser(userId): void{
    this.postService.getPostsByUserId(userId).subscribe(value => console.log(value));
  }

}
