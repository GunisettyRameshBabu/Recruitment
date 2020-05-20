import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-edit-or-add-master-data',
  templateUrl: './edit-or-add-master-data.component.html',
  styleUrls: ['./edit-or-add-master-data.component.css'],
})
export class EditOrAddMasterDataComponent implements OnInit {
  @Input() data;
  masterGroup: FormGroup;
  @Input() dataTypes = [];
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  constructor(private formBuilder: FormBuilder, ) {}

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

    this.masterGroup.reset(this.data);
  }

  closed() {
    this.close.emit(false);
  }

  onSubmit() {
    if (this.masterGroup.valid) {
    }
  }

  public hasError(controlName: string, errorName: string) {
    return this.masterGroup.controls[controlName].hasError(errorName);
  }
}
