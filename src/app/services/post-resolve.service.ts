import { Injectable } from '@angular/core';
import {Post} from '../models/post';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {PostService} from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Post[]>{

  constructor(private postservice: PostService) { }
resolve(): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.postservice.getPosts();
}
}
