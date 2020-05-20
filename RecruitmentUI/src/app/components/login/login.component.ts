import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { LoginService } from './login.service';
import { Login } from './login';
import { ToastrService } from 'ngx-toastr';
import { UsersessionService } from 'src/app/services/usersession.service';
import { Router } from '@angular/router';
import { LoginTypes } from 'src/app/models/user';

export interface DialogData {
  type: any;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  submitted = false;
  type: DialogData;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private alertService: ToastrService,
    private sessionService: UsersessionService,
    private router: Router
  ) {
    // this.type = this.data;
  }

  onNoClick(): void {
    // this.dialogRef.close();
  }
  ngOnInit(): void {
    if (this.sessionService.checkUserLoggedIn()) {
        this.router.navigate(['home']);
    } else {
      this.formGroup = this.formBuilder.group({
        username: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
      });
    }
   
  }
  f() {
    return this.formGroup.controls;
  }
  onLogin() {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.loginService
        .validateuser(
          new Login(
            this.formGroup.controls.username.value,
            this.formGroup.controls.password.value
          )
        )
        .subscribe(
          (res: any) => {
            if (res.success) {
              this.alertService.success('Logged Successfully');
              this.sessionService.addUserSession(res.data);
              this.router.navigate(['home']);
            } else {
              this.alertService.error(res.message, 'Login Failed');
            }
          },
          (err) => {
            console.log(err);
            this.alertService.error(err.message, 'Unable to Login');
          }
        );
    }
  }
}
