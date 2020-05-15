import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersessionService {

  constructor() { }

  checkUserLoggedIn() {
    return sessionStorage.getItem('usersession') != undefined;
  }

  addUserSession(user: User) {
    sessionStorage.setItem('usersession' , JSON.stringify(user));
  }

  signOutSession() {
    sessionStorage.removeItem('usersession');
  }

  getLoggedInUser() {
    let user = sessionStorage.getItem('usersession');
    if (user != undefined) {
      return JSON.parse(user);
    }

    return null;
  }

  getLoginType() {
    let user = sessionStorage.getItem('usersession');
    if (user != undefined) {
      return (JSON.parse(user) as User).loginTypes;
    }

    return null;
  }
}
