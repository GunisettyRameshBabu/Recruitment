import { Component, OnInit } from '@angular/core';
import { UsersessionService } from 'src/app/services/usersession.service';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sessionService: UsersessionService,
    private alertService: ToastrService ,
     private router: Router, private dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  isUserLoggedIn() {
    return this.sessionService.checkUserLoggedIn();
  }

  getLoginType() {
    return this.sessionService.getLoginType();
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

  login(type:any) {
    const dialogRef = this.dialog.open(LoginComponent, {
      data: {type} ,
      position: {
        top : '75px'
      },
      hasBackdrop : true,
      disableClose : false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }

}
