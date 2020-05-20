import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Candidates } from 'src/app/models/candidate';
import { MatDialog } from '@angular/material/dialog';
import { AddcandidateComponent } from './addcandidate/addcandidate.component';
import { JobService } from 'src/app/services/job.service';
import { ServiceResponse } from 'src/app/models/service-response';
import {
  ToolbarItems,
  ExcelExportProperties,
  GridComponent,
  EditSettingsModel,
  SaveEventArgs,
  DialogEditEventArgs,
} from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { saveAs } from 'file-saver';
import { CommonService } from 'src/app/services/common.service';
import { MasterData } from 'src/app/constants/api-end-points';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-jobcandidates',
  templateUrl: './jobcandidates.component.html',
  styleUrls: ['./jobcandidates.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class JobcandidatesComponent implements OnInit {
  @ViewChild('grid') public grid: GridComponent;
  @ViewChild('candidateForm') public candidateForm: FormGroup;
  @Input() candidates: Candidates[] = [];
  @Input() jobid: any;
  editSettings: EditSettingsModel;
  public toolbar;
  candidate: Candidates;
  dropEle: HTMLElement;
  editparams: any;
  constructor(
    public dialog: MatDialog,
    private jobService: JobService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.editparams = { params: { popupHeight: '300px' } };
    this.dropEle = document.getElementById('droparea');
    this.editSettings = {
      allowEditing: false,
      allowAdding: false,
    };
    this.toolbar = ['Candidates', 'Add Candidate', 'ExcelExport'];
  }

  addCandidate() {
    let data = { jobid: this.jobid, id: 0 };
    const dialogRef = this.dialog.open(AddcandidateComponent, {
      data: data,
      hasBackdrop: true,
      disableClose: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.reloadData(result);
    });
  }

  getResume(data) {
    return this.commonService.downloadResume(data.id).subscribe((res: any) => {
      saveAs(res, data.fileName);
    });
  }

  createFormGroup(data1: Candidates): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      jobid: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      middleName: new FormControl(''),
      lastName: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      createdBy: new FormControl('', Validators.required),
      modifiedBy: new FormControl(''),
      createdDate: new FormControl(''),
      modifiedDate: new FormControl('')
    });
  }

  toolbarClick(args: ClickEventArgs): void {
    console.log(args);
    if (args.item.id.indexOf('excelexport') > 0) {
      // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
      const excelExportProperties: ExcelExportProperties = {
        fileName: 'jobcandidates.xlsx',
      };
      this.grid.excelExport(excelExportProperties);
    } else if (args.item.id.indexOf('Add Candidate') > 0) {
      this.addCandidate();
    }
  }

  private reloadData(result: any) {
    if (result) {
      this.jobService
        .getJobCandidates(this.jobid)
        .subscribe((res: ServiceResponse) => {
          this.candidates = res.data;
        });
    }
  }

  Edit(data) {
    const dialogRef = this.dialog.open(AddcandidateComponent, {
      data: data,
      hasBackdrop: true,
      disableClose: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.reloadData(result);
    });
  }
}
