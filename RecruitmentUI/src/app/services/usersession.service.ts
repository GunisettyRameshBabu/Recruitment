import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersessionService {

  constructor() { }

  checkUserLoggedIn() {
    return sessionStorage.getItem(environment.env + '-usersession') != undefined;
  }

  addUserSession(user: User) {
    sessionStorage.setItem(environment.env + '-usersession' , JSON.stringify(user));
  }

  signOutSession() {
    sessionStorage.removeItem(environment.env + '-usersession');
  }

  getLoggedInUser() {
    let user = sessionStorage.getItem(environment.env + '-usersession');
    if (user != undefined) {
      return JSON.parse(user);
    }

    return null;
  }

  getLoginType() {
    let user = sessionStorage.getItem(environment.env + '-usersession');
    if (user != undefined) {
      return (JSON.parse(user) as User).loginTypes;
    }

    return null;
  }
}
