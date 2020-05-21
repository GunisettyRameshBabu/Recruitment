import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Inject,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersessionService } from 'src/app/services/usersession.service';
import { User } from 'src/app/models/user';
import { MasterdataService } from 'src/app/services/masterdata.service';
import { ServiceResponse } from 'src/app/models/service-response';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-or-add-master-data',
  templateUrl: './edit-or-add-master-data.component.html',
  styleUrls: ['./edit-or-add-master-data.component.css'],
})
export class EditOrAddMasterDataComponent implements OnInit {
  masterData;
  masterGroup: FormGroup;
  dataTypes = [];
  user: User;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditOrAddMasterDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userSession: UsersessionService,
    private masterDataService: MasterdataService,
    private alertService: ToastrService
  ) {
    this.dataTypes = data.types;
    this.masterData = data.item;
  }

  ngOnInit(): void {
    this.masterGroup = this.formBuilder.group({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      createdBy: new FormControl(''),
      createdDate: new FormControl(''),
      modifiedBy: new FormControl(''),
      modifiedDate: new FormControl(''),
    });
    this.user = this.userSession.getLoggedInUser() as User;
    this.masterGroup.reset(this.masterData);
  }

  closed() {
   
  }

  cancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.masterGroup.valid) {
      if (this.masterData.id > 0) {
        this.masterGroup.controls.modifiedBy.setValue(this.user.id);
      } else {
        this.masterGroup.controls.createdBy.setValue(this.user.id);
      }

      this.masterDataService.addOrUpdateMasterData(this.masterGroup.value).subscribe((res: ServiceResponse) => {
        if (res.success) {
          this.alertService.success(res.message);
          this.dialogRef.close();
        } else {
          this.alertService.success(res.message);
        }
      });
    }
  }

  public hasError(controlName: string, errorName: string) {
    return this.masterGroup.controls[controlName].hasError(errorName);
  }
}
