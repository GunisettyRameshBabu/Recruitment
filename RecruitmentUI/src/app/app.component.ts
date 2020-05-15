import { Component } from '@angular/core';
import { Spinkit } from 'ng-http-loader';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QubeSmart';
  public spinkit = Spinkit;
  /**
   *
   */
  constructor(private modal: MatDialog) {
    this.modal.closeAll();
  }
}
