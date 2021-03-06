import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';
import * as Parse from 'parse';
import { promise } from 'protractor';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit, OnDestroy {

  userForm: FormGroup;

  dataLoaded: Promise<boolean>;

  isNew = true;
  newUserType = 'influencer';
  newUser = {
    name: ''
  };

  id: string;
  className: string;
  currentUser: any;

  groups = new FormControl();

  groupList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];


  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private _uS: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.className = this._uS.className;
      if (this._uS.className && this.id) {
        this.getUserObject();
        this.isNew = false;
      } else {
        this.buildFormInfl();
      }
    });
  }

  buildFormInfl() {
    this.userForm = this.formBuilder.group(
      {
        'name': [''],
        'secondName': [''],
        'instagramNick': [''],
        'youtubeNick': '',
        'email': [''],
        'phone': [''],
        'city': [''],
      }
    );
  }

  buildFormBrand() {
    this.userForm = this.formBuilder.group(
      {
        'name': [''],
        'phone': [''],
        'email': [''],
        'city': [''],
        'marketingType': '',
        'budget': [''],
        'date': ['']
      }
    );
  }

  getUserObject() {
    const Data = Parse.Object.extend(this._uS.className);
    const query = new Parse.Query(Data);
    query.get(this._uS.id, {
      success: (data) => {
        this.currentUser = data;
        this.dataLoaded = Promise.resolve(true);
      },
      error: (data, error) => {
        console.log(error.message);
      }
    });
  }

  switchUserType() {
    if (this.newUserType === 'brand') {
      this.newUserType = 'influencer';
      this.buildFormInfl();
    } else {
      this.newUserType = 'brand';
      this.buildFormBrand();
    }
  }

  confirmInfuelcer() {
    if (this.id) {
      console.log(this.currentUser.attributes.name);


      this.currentUser.save({
        success: (data) => {
         // console.log('Success ' + data);
        },
        error: (data, error) => {
        //  console.log(error.message);
        }
      });
      console.log('Pakeistas senas');
      // console.log(this.currentUser);
    } else {
      console.log('Issaugotas naujas');
      console.log(this.userForm.value);
    }
  }

  confirmBrand() {
    if (this.id) {
      // same as influencer confirm function
    } else {
      // same as influencer confirm function
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
