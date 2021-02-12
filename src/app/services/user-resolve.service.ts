import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User[]> {

  constructor(private userServise: UserService) { }
  resolve(): Observable<User[]> | Promise<User[]> | User[]  {
    return this.userServise.getUsers();
  }
}
