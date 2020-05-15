import { Component, OnInit, Input } from '@angular/core';
import { Candidates } from 'src/app/models/candidate';
import { MatDialog } from '@angular/material/dialog';
import { AddcandidateComponent } from './addcandidate/addcandidate.component';
import { JobService } from 'src/app/services/job.service';
import { ServiceResponse } from 'src/app/models/service-response';

@Component({
  selector: 'app-jobcandidates',
  templateUrl: './jobcandidates.component.html',
  styleUrls: ['./jobcandidates.component.css']
})
export class JobcandidatesComponent implements OnInit {

  @Input() candidates: Candidates[] = [];
  @Input() jobid: any;
  constructor(public dialog: MatDialog, private jobService: JobService) { }

  ngOnInit(): void {
  }

  addCandidate() {
    let data = { jobid : this.jobid , id: 0 } ;
    const dialogRef = this.dialog.open(AddcandidateComponent, {
      data: data ,
      hasBackdrop : true,
      disableClose : false
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reloadData(result);
    });
  }

  private reloadData(result: any) {
    if (result) {
      this.jobService.getJobCandidates(this.jobid).subscribe((res: ServiceResponse) => {
        this.candidates = res.data;
      });
    }
  }

  Edit(data) {
    const dialogRef = this.dialog.open(AddcandidateComponent, {
      data: data ,
      hasBackdrop : true,
      disableClose : false
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reloadData(result);
    });
  }

}
