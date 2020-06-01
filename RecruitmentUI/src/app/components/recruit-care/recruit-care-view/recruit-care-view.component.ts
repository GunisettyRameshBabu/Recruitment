import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-recruit-care-view',
  templateUrl: './recruit-care-view.component.html',
  styleUrls: ['./recruit-care-view.component.css']
})
export class RecruitCareViewComponent implements OnInit {

  candidate: any;
  constructor(
    public dialogRef: MatDialogRef<RecruitCareViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.candidate = data;
  }

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

}
