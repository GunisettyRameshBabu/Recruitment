import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ServiceResponse } from 'src/app/models/service-response';
import { Router } from '@angular/router';
import { UsereditComponent } from './useredit/useredit.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];
  constructor(private userService: UsersService, private router: Router, 
    private dialog: MatDialog) { 

  }

  ngOnInit(): void {
    this.getUsers();
    
  }

  private getUsers() {
    this.userService.getUsers().subscribe((res: ServiceResponse) => {
      this.users = res.data;
    });
  }

  add() {
    const dialogRef = this.dialog.open(UsereditComponent, {
      data: {} ,
      position: {
        top : '30px'
      },
      hasBackdrop : true,
      disableClose : false
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUsers();
    });
  }

  edit(data) {
    const dialogRef = this.dialog.open(UsereditComponent, {
      data: data ,
      position: {
        top : '30px'
      },
      hasBackdrop : true,
      disableClose : false
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUsers();
    });
  }

}
