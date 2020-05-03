import { Component, OnInit } from '@angular/core';
import { UsersessionService } from 'src/app/services/usersession.service';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sessionService: UsersessionService,
    private alertService: ToastrService , private router: Router ) { }

  ngOnInit(): void {
  }

  isUserLoggedIn() {
    return this.sessionService.checkUserLoggedIn();
  }

  getFullName() {
    let user = this.sessionService.getLoggedInUser() as User;
    if (user != null) {
      return user.firstName + ' ' + user.middleName ?? '' + ' ' + user.lastName;
    }

    return '';
  }

  logout() {
    this.sessionService.signOutSession();
    this.alertService.success('User logged out successfully');
    this.router.navigate(['']);
  }

}
