import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { CommonService } from 'src/app/services/common.service';
import { ApiEndPoints } from 'src/app/constants/api-end-points';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsereditComponent implements OnInit {

  roles = [];
  countries = [];
  userGroup: FormGroup;
  user: User;
  userEditGroup: FormGroup;
  
  constructor(public dialogRef: MatDialogRef<UsereditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,private router: Router,
    private commonService: CommonService, private userService: UsersService,
    private alertService: ToastrService) {
      this.user = data;
     }

  ngOnInit(): void {
    this.commonService.getMasterData(ApiEndPoints.roles).subscribe((res: any) => {
      this.roles = res;
    });
    this.commonService.getMasterData(ApiEndPoints.countries).subscribe((res: any) => {
      this.countries = res;
    });
    if (this.user.id == undefined) {
      this.userGroup = new FormGroup({
        firstName: new FormControl('', Validators.required),
        middleName: new FormControl(''),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required,Validators.email]),
        userid: new FormControl(''),
        password: new FormControl('', Validators.required),
        repassword: new FormControl('', [Validators.required]),
        roleId: new FormControl('', Validators.required),
        countryId: new FormControl('', Validators.required)
      });
    } else {
      this.userEditGroup = new FormGroup({
        id: new FormControl('', Validators.required),
        firstName: new FormControl('', Validators.required),
        middleName: new FormControl(''),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required,Validators.email]),
        userid: new FormControl(''),
        roleId: new FormControl('', Validators.required),
        countryId: new FormControl('', Validators.required)
      });
      this.userEditGroup.reset(this.user);
    }
  }

  onSubmit() {
    if (this.user.id == undefined) {
      if (this.userGroup.valid) {
        this.userGroup.controls.userid.setValue(this.userGroup.controls.email.value);
        this.userService.adduser(this.userGroup.value).subscribe((res: any) => {
          this.alertService.success('User added successfully');
          this.dialogRef.close();
          this.router.navigate(['users']);
        });
      }
    } else {
      if (this.userEditGroup.valid) {
        this.userEditGroup.controls.userid.setValue(this.userEditGroup.controls.email.value);
        this.userService.updateuser(this.userEditGroup.value).subscribe((res: any) => {
          this.alertService.success('User added successfully');
          this.dialogRef.close();
          this.router.navigate(['users']);
        });
      }
    }
  }

  public hasError(controlName: string, errorName: string) {
    return this.user.id == undefined ? this.userGroup.controls[controlName].hasError(errorName) :
     this.userEditGroup.controls[controlName].hasError(errorName);
  }

  cancel() {
    this.dialogRef.close();
    this.router.navigate(['users']);
  }

}
