import { Component, OnInit, Inject } from '@angular/core';
import * as Parse from 'parse';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss']
})
export class RegistrationsComponent implements OnInit {

  influencers = [];
  brands = [];
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getInfluencers();
    this.getBrands();
  }

  openDialog(info): void {
    const dialogRef = this.dialog.open(RegistrationsModalComponent, {
      data: {
        className: info.className,
        id: info.id,
        name: info.attributes.name,
        phone: info.attributes.phoneNumber,
        email: info.attributes.email,
        city: info.attributes.city,
        instagramNick: info.attributes.instagramNick,
        youtubeNick: info.attributes.youtubeNick,
        groupsOfInterests: info.attributes.groups,
        marketingType: info.attributes.marketingType,
        budget: info.attributes.budget,
        date: info.attributes.date.getTime().getHours() // check how is better to get
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  getInfluencers() {
    this.influencers = [];
    const Influencers4201 = Parse.Object.extend('Influencers4201');
    const query = new Parse.Query(Influencers4201);
    query.find({
      success: (results) => {
        console.log('Successfully retrieved ' + results.length);
        for (let i = 0; i < results.length; i++) {
          const object = results[i];
          this.influencers.push(object);
          console.log(object);
        }
      },
      error: (error) => {
        alert('Error: ' + error.code + ' ' + error.message);
      }
    });
  }

  getBrands() {
    this.brands = [];
    const Brands4201 = Parse.Object.extend('Brands4201');
    const query = new Parse.Query(Brands4201);
    query.find({
      success: (results) => {
        console.log('Successfully retrieved ' + results.length);
        for (let i = 0; i < results.length; i++) {
          const object = results[i];
          this.brands.push(object);
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
})
export class RegistrationsModalComponent {

  constructor(
    public dialogRef: MatDialogRef<RegistrationsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
