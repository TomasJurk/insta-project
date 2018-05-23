import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';
import * as Parse from 'parse';

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
    /* const TestTest = Parse.Object.extend('TestTest');
    const testTest = new TestTest();

    testTest.set('score', 1337);
    testTest.set('playerName', 'Sean Plott');
    testTest.set('cheatMode', false);

    testTest.save(null, {
      success: function(abc) {
        // Execute any logic that should take place after the object is saved.
        alert('New object created with objectId: ' + abc.id);
      },
      error: function(abc, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      }
    }); */
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

