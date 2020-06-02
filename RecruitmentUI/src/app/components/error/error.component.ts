import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private modal: MatDialog,
    private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Qube Connect - Error');
    this.modal.closeAll();
  }

}
