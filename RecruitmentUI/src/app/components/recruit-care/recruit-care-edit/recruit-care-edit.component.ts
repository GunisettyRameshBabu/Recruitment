import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { JobService } from 'src/app/services/job.service';
import { UsersessionService } from 'src/app/services/usersession.service';
import { User } from 'src/app/models/user';
import { ServiceResponse } from 'src/app/models/service-response';
import { CommonService } from 'src/app/services/common.service';
import { MasterData } from 'src/app/constants/api-end-points';

@Component({
  selector: 'app-recruit-care-edit',
  templateUrl: './recruit-care-edit.component.html',
  styleUrls: ['./recruit-care-edit.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RecruitCareEditComponent implements OnInit {
  recruitGroup: FormGroup;
  recruit: any = {};
  jobs = [];
  user: User;
  statusList = [];
  resume: any;
  constructor(
    public dialogRef: MatDialogRef<RecruitCareEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private alertService: ToastrService,
    private jobService: JobService,
    private userSession: UsersessionService,
    private commonService: CommonService
  ) {
    this.recruit = data;
  }

  ngOnInit(): void {
    this.user = this.userSession.getLoggedInUser() as User;
    this.recruitGroup = this.formBuilder.group({
      id: new FormControl(0),
      firstName: new FormControl('', Validators.required),
      middleName: new FormControl(''),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      jobid: new FormControl('', Validators.required),
      comments: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      createdBy: new FormControl(''),
      modifiedBy: new FormControl(''),
      createdDate: new FormControl(''),
      modifiedDate: new FormControl(''),
      fileName: new FormControl('', Validators.required)
    });
    this.recruitGroup.reset(this.recruit);
    this.jobService
      .getJobs(this.user.countryId)
      .subscribe((res: ServiceResponse) => {
        if (res.success) {
          this.jobs = res.data;
        } else {
          this.alertService.error(res.message);
        }
      });

    this.commonService
      .getMasterDataByType(MasterData.JobCandidateStatus)
      .subscribe((res: ServiceResponse) => {
        if (res.success) {
          this.statusList = res.data;
        } else {
          this.alertService.error(res.message);
        }
      });
  }

  onSubmit() {
    if (this.recruitGroup.valid) {
      if (this.recruitGroup.controls.id.value > 0) {
        this.recruitGroup.controls.modifiedBy.setValue(this.user.id);
      } else {
        this.recruitGroup.controls.createdBy.setValue(this.user.id);
      }

      this.jobService
        .addOrUpdateRecruitCare(this.recruitGroup.value)
        .subscribe((res: ServiceResponse) => {
          if (res.success) {
            this.jobService.addRecruitCareResume(res.data, this.resume).subscribe((res1: ServiceResponse) => {
              if (res1.success) {
                this.alertService.show(res1.message);
                this.dialogRef.close();
              } else {
                this.alertService.error(res1.message);
              }
            });
          } else {
            this.alertService.error(res.message);
          }
        });
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  public hasError(controlName: string, errorName: string) {
    return this.recruitGroup.controls[controlName].hasError(errorName);
  }

  public uploadFile = (files) => {
    console.log(files);
    this.resume = files;
    this.recruitGroup.controls.fileName.setValue(files[0].name);
  }
}
