import { Component, OnInit, Input, Inject, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Jobapply } from './jobapply';
import { UsersessionService } from 'src/app/services/usersession.service';
import { User } from 'src/app/models/user';
import { JobService } from 'src/app/services/job.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobapply',
  templateUrl: './jobapply.component.html',
  styleUrls: ['./jobapply.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class JobapplyComponent implements OnInit {
  @Input() job;
  formGroup: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<JobapplyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userSession: UsersessionService,
    private jobService: JobService,
    private notificationService: ToastrService,
    private router: Router
  ) {
    this.job = data;
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      jobid: new FormControl(''),
      userid: new FormControl(''),
      comments: new FormControl(''),
    });

    this.formGroup.reset(this.job);
  }

  onApply() {
    let jobapply = new Jobapply();
    jobapply.comments = this.formGroup.controls.comments.value;
    jobapply.jobid = this.job.jobid;
    jobapply.userid = (this.userSession.getLoggedInUser() as User).userid;
    jobapply.id = 0;

    this.jobService.applyJob(jobapply).subscribe(((res: any) => {
        if (res.success) {
          this.notificationService.success('Applied for job successfully', 'Job Apply Status');
          this.dialogRef.close();
          this.router.navigate(['jobopenings']);
        } else {
          this.notificationService.error(res.message, 'Job Apply Status');
        }
    }));
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
