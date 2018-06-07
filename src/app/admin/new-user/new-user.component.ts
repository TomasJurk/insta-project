import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
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
      }
    });
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.formBuilder.group(
      {
        'name': ['']
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
        console.log(this.currentUser);
      },
      error: (data, error) => {
        console.log(error.message);
      }
    });
  }

  switchUserType() {
    if (this.newUserType === 'brand') {
      this.newUserType = 'influencer';
    } else {
      this.newUserType = 'brand';
    }
  }

  confirmInfuelcer() {
    if (this.id) {
      console.log('Pakeistas senas');
    } else {
      console.log('Issaugotas naujas');
      console.log(this.userForm.value);
    }
  }

  confirmBrand() {
    if (this.id) {
      console.log('Pakeistas senas');
    } else {
      console.log('Issaugotas naujas');
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
