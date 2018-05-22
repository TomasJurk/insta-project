import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDialogInfl() {
    this.dialog.open(MatDialogComponent, {
      data: {
        formType: 'influencer'
      }
    });
  }

  openDialogBrand() {
    this.dialog.open(MatDialogComponent, {
      data: {
        formType: 'brand'
      }
    });
  }

}

