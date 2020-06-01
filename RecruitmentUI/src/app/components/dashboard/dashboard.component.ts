import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
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
export class DashboardComponent implements OnInit , AfterViewInit {
  data = [];
  backGrounds = [
    'e-card e-custom-card bg-1',
    'e-card e-custom-card bg-2',
    'e-card e-custom-card bg-10',
    'e-card e-custom-card bg-11',
    'e-card e-custom-card bg-41',
  ];
  constructor(
    private modal: MatDialog,
    private jobService: JobService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.modal.closeAll();
    this.jobService.getDashboardData().subscribe((res: ServiceResponse) => {
      if (res.success) {
        this.data = res.data.result;
        this.data.forEach(element => {
          element.style = this.backGrounds[Math.floor(this.random(1, 5)) - 1];
        });
      } else {
        this.router.navigate(['**']);
      }
    });
  }

  random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
  }

  getColorCode() {
    return this.backGrounds[Math.floor(this.random(1, 5)) - 1];
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
