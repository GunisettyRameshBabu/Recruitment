import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersessionService } from 'src/app/services/usersession.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-jobopenings',
  templateUrl: './jobopenings.component.html',
  styleUrls: ['./jobopenings.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class JobopeningsComponent implements OnInit {

  openings = [];
  type;
  constructor(private jobService: JobService, private router: Router, private alertService: ToastrService,
    private sessionService: UsersessionService) { }

  ngOnInit(): void {
    this.type = (this.sessionService.getLoggedInUser() as User).type;
    this.jobService.getJobOpenings(this.type).subscribe((res: any) => {
      if (res.success) {
        this.openings = res.data;
      } else {
        this.alertService.error(res.message);
      }
     
    });
   
  }

  showDetails(item) {
    this.router.navigate(['jobdetails', item.jobid] );
  }

  add() {
    this.router.navigate(['addjob'] );
  }

}
