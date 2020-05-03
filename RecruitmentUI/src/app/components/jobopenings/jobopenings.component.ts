import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobopenings',
  templateUrl: './jobopenings.component.html',
  styleUrls: ['./jobopenings.component.css']
})
export class JobopeningsComponent implements OnInit {

  openings = [];
  constructor(private jobService: JobService, private router: Router) { }

  ngOnInit(): void {
    this.jobService.getJobOpenings().subscribe((res: any) => {
      this.openings = res;
    });
  }

  showDetails(item) {
    this.router.navigate(['jobdetails', item.id] );
  }

}
