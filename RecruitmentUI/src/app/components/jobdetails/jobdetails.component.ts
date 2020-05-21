import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JobService } from '../../services/job.service';
import { MatDialog } from '@angular/material/dialog';
import { ServiceResponse } from 'src/app/models/service-response';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css'],
})
export class JobdetailsComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private service: JobService,
    public dialog: MatDialog,
    private alertService: ToastrService
  ) {}
  job;
  jobid;
  ngOnInit(): void {
    this.dialog.closeAll();
    this.router.params.subscribe((res: any) => {
      this.jobid = res.jobid;
      this.service
        .getJobDetails(this.jobid)
        .subscribe((data: ServiceResponse) => {
          if (data.success) {
            this.job = data.data;
          } else {
            this.alertService.error(data.message);
          }
        });
    });
  }

  addCandidate() {}
}
