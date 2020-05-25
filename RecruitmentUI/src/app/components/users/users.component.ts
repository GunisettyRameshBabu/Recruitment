import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ServiceResponse } from 'src/app/models/service-response';
import { Router } from '@angular/router';
import { UsereditComponent } from './useredit/useredit.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common.service';
import {
  ExcelExportProperties,
  GridComponent,
} from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UsersComponent implements OnInit {
  @ViewChild('grid') public grid: GridComponent;
  users = [];
  editparams: { params: { popupHeight: string } };
  toolbar: string[];
  constructor(
    private userService: UsersService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dialog.closeAll();
    this.editparams = { params: { popupHeight: '300px' } };
    this.toolbar = ['Users', 'Add Users', 'ExcelExport'];
    this.getUsers();
  }

  private getUsers() {
    this.userService.getUsers().subscribe((res: ServiceResponse) => {
      this.users = res.data;
    });
  }

  toolbarClick(args: ClickEventArgs): void {
    console.log(args);
    if (args.item.id.indexOf('excelexport') > 0) {
      // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
      const excelExportProperties: ExcelExportProperties = {
        fileName: 'users.xlsx',
      };
      this.grid.excelExport(excelExportProperties);
    } else if (args.item.id.indexOf('Add User') > 0) {
      this.add();
    }
  }

  add() {
    const dialogRef = this.dialog.open(UsereditComponent, {
      data: {},
      hasBackdrop: true,
      disableClose: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getUsers();
    });
  }

  edit(data) {
    const dialogRef = this.dialog.open(UsereditComponent, {
      data,
      hasBackdrop: true,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getUsers();
    });
  }
}
