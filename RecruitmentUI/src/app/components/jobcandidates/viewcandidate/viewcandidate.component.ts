import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-viewcandidate',
  templateUrl: './viewcandidate.component.html',
  styleUrls: ['./viewcandidate.component.css'],
})
export class ViewcandidateComponent implements OnInit {
  candidate: any;
  constructor(
    public dialogRef: MatDialogRef<ViewcandidateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.candidate = data;
  }

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }
}
