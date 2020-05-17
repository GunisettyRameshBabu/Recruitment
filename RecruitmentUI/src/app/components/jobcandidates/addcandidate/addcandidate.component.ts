import {
  Component,
  OnInit,
  Inject,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersessionService } from 'src/app/services/usersession.service';
import { JobService } from 'src/app/services/job.service';
import { User } from 'src/app/models/user';
import { ServiceResponse } from 'src/app/models/service-response';
import { HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-addcandidate',
  templateUrl: './addcandidate.component.html',
  styleUrls: ['./addcandidate.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AddcandidateComponent implements OnInit {
  job: any;
  jobGroup: FormGroup;
  statuses: any[] = [];
  @ViewChild('fileInput', { static: false }) file: ElementRef;
  resume: any;
  percentage = 0;
  user: User;
  public dropEle: HTMLElement ;

  constructor(
    public dialogRef: MatDialogRef<AddcandidateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private alertService: ToastrService,
    private jobService: JobService,
    private userSession: UsersessionService
  ) {
    this.job = data;
    console.log(this.job);
  }

  ngOnInit(): void {
    this.dropEle = document.getElementById('droparea');
    this.jobService.getCandidateStatus().subscribe((res: any) => {
      this.statuses = res;
    });
    this.jobGroup = this.formBuilder.group({
      id: new FormControl(''),
      jobid: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      middleName: new FormControl(''),
      lastName: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      createdBy: new FormControl('', Validators.required),
      modifiedBy: new FormControl(''),
      fileName: new FormControl('')
    });

    this.jobGroup.reset(this.job);
    this.user = this.userSession.getLoggedInUser() as User;
    this.jobGroup.controls.createdBy.setValue(this.user.userid);
    if (this.jobGroup.controls.id.value != "0") {
      this.jobGroup.controls.modifiedBy.setValue(this.user.userid);
    }
  }

  public hasError(controlName: string, errorName: string) {
    return this.jobGroup.controls[controlName].hasError(errorName);
  }

  cancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.jobGroup.valid) {
      this.jobService
        .addOrUpdateCandidate(this.jobGroup.value)
        .subscribe((res: ServiceResponse) => {
          if (res.success && this.resume) {
            this.jobService
              .addCandidateResume(res.data, this.resume)
              .subscribe((result: any) => {
                if (result['type'] === HttpEventType.UploadProgress) {
                  this.percentage = Math.round(
                    (100 * result.loaded) / result.total
                  );
                } else {
                  if (result.success) {
                    this.alertService.success(result.message);
                    this.dialogRef.close(result.success);
                  } else {
                    this.alertService.error(result.message);
                  }
                }
              });
          } else {
            this.alertService.success(res.message);
            this.dialogRef.close(res.success);
          }
        });
    }
  }

  public uploadFile = (files) => {
    this.resume = files;
  }

  public browseClick() {
    document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click(); return false;
  }
}
