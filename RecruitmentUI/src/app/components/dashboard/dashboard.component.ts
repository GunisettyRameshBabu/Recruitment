import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobService } from 'src/app/services/job.service';
import { ServiceResponse } from 'src/app/models/service-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  data = [];
  constructor(
    private modal: MatDialog,
    private jobService: JobService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.modal.closeAll();
    this.jobService.getDashboardData().subscribe((res: ServiceResponse) => {
      if (res.success) {
        this.data = res.data.result;
      } else {
        this.router.navigate(['**']);
      }
    });
  }

  getColorCode(type) {
    let color = 'e-card bg-secondary';
    switch (type) {
      case 'Bench':
        color = 'e-card bg-danger';
        break;
      case 'Hold':
        color = 'e-card bg-info';
        break;
      case 'InProgress':
        color = 'e-card bg-primary';
        break;
      case 'Interview On Going':
        color = 'e-card bg-primary';
        break;
      case 'Not Reachable':
        case 'Rejected':
        color = 'e-card bg-danger';
        break;
      case 'Offered':
        color = 'e-card bg-success';
        break;
      case 'Submitted':
        color = 'e-card bg-primary';
        break;

      default:
        break;
    }
    return color;
  }
}
