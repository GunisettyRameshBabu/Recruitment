import { Component, OnInit, ViewChild } from '@angular/core';
import { EditSettingsModel, ExcelExportProperties, GridComponent } from '@syncfusion/ej2-angular-grids';
import { UsersessionService } from 'src/app/services/usersession.service';
import { User } from 'src/app/models/user';
import { ServiceResponse } from 'src/app/models/service-response';
import { JobService } from 'src/app/services/job.service';
import { ToastrService } from 'ngx-toastr';
import { RecruitCareEditComponent } from './recruit-care-edit/recruit-care-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-recruit-care',
  templateUrl: './recruit-care.component.html',
  styleUrls: ['./recruit-care.component.css'],
})
export class RecruitCareComponent implements OnInit {
  @ViewChild('grid') public grid: GridComponent;
  candidates = [];
  editSettings: EditSettingsModel;
  toolbar: string[];
  user: User;
  constructor(
    private userSession: UsersessionService,
    private jobService: JobService,
    private alertService: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.user = this.userSession.getLoggedInUser();
    this.getData();
    this.editSettings = {
      allowEditing: false,
      allowAdding: false,
      mode: 'Dialog',
    };
    this.toolbar = ['Add Record', 'ExcelExport'];
  }

  private getData() {
    this.jobService
      .GetRecruitCare(this.user.id)
      .subscribe((res: ServiceResponse) => {
        if (res.success) {
          this.candidates = res.data;
        }
        else {
          this.alertService.error(res.message);
        }
      });
  }

  add() {
    this.showPopup({ id : 0 });
  }

  edit(data) {
    this.showPopup(data);
  }

  private showPopup(data: any) {
    const dialogRef = this.dialog.open(RecruitCareEditComponent, {
      data,
      position: {
        top: '7%'
      },
      hasBackdrop: true,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getData();
    });
  }

  toolbarClick(args: ClickEventArgs): void {
    console.log(args);
    if (args.item.id.indexOf('excelexport') > 0) {
      // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
      const excelExportProperties: ExcelExportProperties = {
        fileName: 'Recruit care details.xlsx',
      };
      this.grid.excelExport(excelExportProperties);
    } else if (args.item.id.indexOf('Add Record') > 0) {
      this.add();
    } 
  }
}