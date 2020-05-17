import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersessionService } from 'src/app/services/usersession.service';
import { User } from 'src/app/models/user';
import {
  GridModel,
  GridComponent,
  DetailRowService,
  DetailDataBoundEventArgs,
  ToolbarItems,
  ExcelExportProperties,
  EditSettingsModel,
} from '@syncfusion/ej2-angular-grids';

import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-jobopenings',
  templateUrl: './jobopenings.component.html',
  styleUrls: ['./jobopenings.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class JobopeningsComponent implements OnInit {
  openings: { jobs: any[]; candidates: any[] } = { candidates: [], jobs: [] };
  type;
  public toolbarOptions: any[];
  public childGrid: GridModel = {
    queryString: 'jobid',
    dataSource: this.openings.candidates,
    columns: [
      { field: 'jobid', headerText: 'Job Id', width: 120, visible: false },
      { field: 'firstName', headerText: 'First Name', width: 120 },
      { field: 'middleName', headerText: 'Middle Name', width: 150 },
      { field: 'lastName', headerText: 'Last Name', width: 150 },
      { field: 'phone', headerText: 'Phone', width: 150 },
      { field: 'statusName', headerText: 'Status', width: 150 },
      { field: 'email', headerText: 'Email', width: 150 },
    ],
    load() {
      //   // this.dataSource = [
      //   //   { firstName: 'test', email: 'test', phone: '99999', exp: '11' },
      //   // ];
      //   const jobid = 'jobid';
      //   (this as GridComponent).parentDetails.parentKeyFieldValue = ((this as GridComponent).parentDetails.parentRowData as
      //   { jobid?: string }
      // )[jobid];
    },
  };
  @ViewChild('grid') public grid: GridComponent;
  public editSettings: EditSettingsModel;
  public pageSettings: Object;
  constructor(
    public jobService: JobService,
    private router: Router,
    private alertService: ToastrService,
    private sessionService: UsersessionService
  ) {}

  ngOnInit(): void {
    this.toolbarOptions = ['Openings','ExcelExport', 'Add'];
    this.pageSettings = { pageSizes: true, pageSize: 10 };
    this.editSettings = { allowAdding: true };
    let user = this.sessionService.getLoggedInUser() as User;
    this.type = user.type;
    this.jobService
      .getJobOpenings(this.type, user.userid)
      .subscribe((res: any) => {
        if (res.success) {
          this.openings = res.data;
          this.childGrid.dataSource = res.data.candidates;
        } else {
          this.alertService.error(res.message);
        }
      });
  }

  showDetails(item) {
    this.router.navigate(['jobdetails', item.jobid]);
  }

  toolbarClick(args: ClickEventArgs): void {
    console.log(args);
    if (args.item.id.indexOf('excelexport') > 0) {
      // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
      const excelExportProperties: ExcelExportProperties = {
        fileName: 'jobopenings.xlsx',
      };
      this.grid.excelExport(excelExportProperties);
    } 
    else if(args.item.id.indexOf('add') > 0) {
      this.router.navigate(['addjob']);
    }
  }

  add() {
    this.router.navigate(['addjob']);
  }

  onLoad(event): void {
    console.log(event);
    this.grid.childGrid.dataSource = [
      { name: 'test', email: 'test', phone: '99999', exp: '11' },
    ]; // assign data source for child grid.
  }
}
