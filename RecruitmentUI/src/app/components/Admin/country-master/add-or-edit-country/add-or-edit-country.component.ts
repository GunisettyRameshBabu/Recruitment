import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersessionService } from 'src/app/services/usersession.service';
import { ToastrService } from 'ngx-toastr';
import { MasterdataService } from 'src/app/services/masterdata.service';
import { ServiceResponse } from 'src/app/models/service-response';

@Component({
  selector: 'app-add-or-edit-country',
  templateUrl: './add-or-edit-country.component.html',
  styleUrls: ['./add-or-edit-country.component.css']
})
export class AddOrEditCountryComponent implements OnInit {

  masterData;
  countryGroup: FormGroup;
  dataTypes = [];
  user: User;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddOrEditCountryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userSession: UsersessionService,
    private masterDataService: MasterdataService,
    private alertService: ToastrService
  ) {
    this.masterData = data;
  }

  ngOnInit(): void {
    this.countryGroup = this.formBuilder.group({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      createdBy: new FormControl(''),
      createdDate: new FormControl(''),
      modifiedBy: new FormControl(''),
      modifiedDate: new FormControl(''),
    });
    this.user = this.userSession.getLoggedInUser() as User;
    this.countryGroup.reset(this.masterData);
  }

  closed() {
   
  }

  cancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.countryGroup.valid) {
      if (this.masterData.id > 0) {
        this.countryGroup.controls.modifiedBy.setValue(this.user.id);
      } else {
        this.countryGroup.controls.createdBy.setValue(this.user.id);
      }

      this.masterDataService.addOrUpdateCountry(this.countryGroup.value).subscribe((res: ServiceResponse) => {
        if (res.success) {
          this.alertService.success(res.message);
          this.dialogRef.close();
        } else {
          this.alertService.success(res.message);
        }
      });
    }
  }

  public hasError(controlName: string, errorName: string) {
    return this.countryGroup.controls[controlName].hasError(errorName);
  }

}
