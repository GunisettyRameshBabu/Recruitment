import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder ,  FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Login } from './login';
import { ToastrService } from 'ngx-toastr';
import { UsersessionService } from 'src/app/services/usersession.service';
import { Router } from '@angular/router';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  submitted: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private formBuilder: FormBuilder,
    private loginService: LoginService, private alertService: ToastrService,
    private sessionService: UsersessionService,
    private router: Router) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', Validators.required)
    });
  }
  f() {  
    return this.formGroup.controls;
  }
  onLogin() {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.loginService.validateuser(new Login(this.formGroup.controls.username.value, 
        this.formGroup.controls.password.value)).subscribe((res: any) => {
          if (res.success) {
            this.alertService.success('Logged Successfully', 'Login Success');
            this.sessionService.addUserSession(res.data);
            this.dialogRef.close();
            this.router.navigate(['jobopenings']);
          } else {
            this.alertService.error(res.message, 'Login Failed');
          }
      }, (err) => {
        console.log(err);
        this.alertService.error(err.message, 'Unable to Login');
      });
    }
  }



}
