import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersessionService } from 'src/app/services/usersession.service';
import { User } from 'src/app/models/user';
import { GridModel, GridComponent, DetailRowService, DetailDataBoundEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-jobopenings',
  templateUrl: './jobopenings.component.html',
  styleUrls: ['./jobopenings.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DetailRowService]
})
export class JobopeningsComponent implements OnInit {

  openings = [];
  type;
  public childGrid: GridModel = {   
    queryString: 'jobid',
    columns: [
      { field: 'jobid', headerText: 'Job Id',  width: 120 , visible: false },
        { field: 'name', headerText: 'Name',  width: 120 },
        { field: 'email', headerText: 'Email', width: 150 },
        { field: 'phone', headerText: 'Phone', width: 150 },
        { field: 'exp', headerText: 'Experience', width: 150 }
    ],
    load: function(args:any){ 
      this.dataSource = [{name:'test', email: 'test', phone:'99999', exp: '11'}]; 
    }, 
};
@ViewChild('grid') public grid: GridComponent;
  constructor(private jobService: JobService, private router: Router, private alertService: ToastrService,
    private sessionService: UsersessionService) { }

  ngOnInit(): void {
    let user = (this.sessionService.getLoggedInUser() as User);
    this.type = user.type;
    this.jobService.getJobOpenings(this.type, user.userid).subscribe((res: any) => {
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

  onLoad(event): void {
    console.log(event);
    this.grid.childGrid.dataSource = [{name:'test', email: 'test', phone:'99999', exp: '11'}]; // assign data source for child grid.
}

}
