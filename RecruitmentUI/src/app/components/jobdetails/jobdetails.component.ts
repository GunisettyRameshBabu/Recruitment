import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JobService } from '../../services/job.service';
import { MatDialog } from '@angular/material/dialog';
import { JobapplyComponent } from '../jobapply/jobapply.component';
import { ServiceResponse } from 'src/app/models/service-response';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {

  constructor(private router: ActivatedRoute , private service: JobService,
    public dialog: MatDialog, private alertService: ToastrService) { }
  job;
  jobid;
  ngOnInit(): void {
    this.router.params.subscribe((res: any) => {
      this.jobid = res.jobid;
      this.service.getJobDetails(this.jobid).subscribe((data: ServiceResponse) => {
        if(data.success) {
          this.job = data.data;
        } else {
          this.alertService.error(data.message);
        }
      });
    });
  }

  Apply() {
    const dialogRef = this.dialog.open(JobapplyComponent, {
      data: this.job ,
      position : {
        top: '75px'
      },
      hasBackdrop : true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addCandidate() {
    
  }

}
