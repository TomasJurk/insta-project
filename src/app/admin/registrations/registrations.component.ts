import { Component, OnInit, Inject } from '@angular/core';
import * as Parse from 'parse';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RouterModule, Routes, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss']
})
export class RegistrationsComponent implements OnInit {

  influencers = [];
  brands = [];

  seenUsers = [];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getInfluencers();
    this.getBrands();
  }

  openDialog(info): void {
    const dialogRef = this.dialog.open(RegistrationsModalComponent, {
      data: info
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getInfluencers();
      this.getBrands();
    });
  }


  getInfluencers() {
    this.seenUsers = [];
    this.influencers = [];
    const Influencers4201 = Parse.Object.extend('Influencers4201');
    const query = new Parse.Query(Influencers4201);
    query.find({
      success: (results) => {
        for (let i = 0; i < results.length; i++) {
          const object = results[i];
          if (object.attributes.seen === false) {
            this.influencers.push(object);
          } else {
            this.seenUsers.push(object);
          }
        }
      },
      error: (error) => {
        alert('Error: ' + error.code + ' ' + error.message);
      }
    });
  }

  getBrands() {
    this.seenUsers = [];
    this.brands = [];
    const Brands4201 = Parse.Object.extend('Brands4201');
    const query = new Parse.Query(Brands4201);
    query.find({
      success: (results) => {
        for (let i = 0; i < results.length; i++) {
          const object = results[i];
          if (object.attributes.seen === false) {
            this.brands.push(object);
          } else {
            this.seenUsers.push(object);
          }
        }
      },
      error: (error) => {
        alert('Error: ' + error.code + ' ' + error.message);
      }
    });
  }

}

@Component({
  selector: 'app-registrations-modal',
  templateUrl: 'registrations.modal.html',
  styleUrls: ['./registrations.component.scss']
})
export class RegistrationsModalComponent {

  constructor(
    public dialogRef: MatDialogRef<RegistrationsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private _uS: UserService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  checkSeen() {
    this.data.set('seen', true);
    this.data.save({
      success: () => {
        this.dialogRef.close();
      }
    });
  }

  checkApproved(id, className) {
    this.data.set('approved', true);
    this.data.set('seen', true);
    this.data.save({
      success: () => {
        this._uS.getUser(id, className);
        this.router.navigate(['admin/new-user', id]);
        this.dialogRef.close();
      }
    });
  }

  testUncheck() {
    this.data.set('seen', false);
    this.data.set('approved', false);
    this.data.save({
      success: () => {
        this.dialogRef.close();
      }
    });
  }
}


