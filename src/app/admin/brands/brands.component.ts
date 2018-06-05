import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brands = [];
  constructor() { }

  ngOnInit() {
    this.getBrands();
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
          if (object.attributes.approved === true) {
            this.brands.push(object.attributes);
          }
        }
      },
      error: (error) => {
        alert('Error: ' + error.code + ' ' + error.message);
      }
    });
  }

}
