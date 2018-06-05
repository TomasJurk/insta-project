import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';

@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html',
  styleUrls: ['./influencers.component.scss']
})
export class InfluencersComponent implements OnInit {

  influencers = [];
  constructor() { }

  ngOnInit() {
    this.getInfluencers();
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
          if (object.attributes.approved === true) {
            this.influencers.push(object.attributes);
          }
        }
      },
      error: (error) => {
        alert('Error: ' + error.code + ' ' + error.message);
      }
    });
  }

}
