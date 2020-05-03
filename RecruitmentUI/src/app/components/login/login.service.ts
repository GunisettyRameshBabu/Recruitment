import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  validateuser(login: Login) {
    return this.http.post(environment.apiUrl + 'Users/Login', login);
  }
}
