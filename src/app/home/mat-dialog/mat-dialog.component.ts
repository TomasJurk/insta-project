import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import {FormControl} from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

type UserFields = 'name' | 'secondName' | 'instagramNick' | 'youtubeNick'
| 'email' | 'phone' | 'city' | 'budget' | 'marketingType' | 'date';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.scss']
})
export class MatDialogComponent implements OnInit {

  influencer = {
    name: '',
    secondName: '',
    instagramNick: '',
    youtubeNick: '',
    cattegory: '',
  };

  userForm: FormGroup;
  formErrors: FormErrors = {
    'name': '',
    'secondName': '',
    'instagramNick': '',
    'youtubeNick': '',
    'email': '',
    'phone': '',
    'city': '',
    'budget': '',
    'marketingType': '',
    'date': '',
  };
  private validationMessage = {
    'name': {
      'required': 'Name is required',
      'minlength': 'Name must be at least 2 char long.'
    },
    'secondName': {
      'required': 'Second name is required',
      'minlength': 'Second name must be at least 2 char long.'
    },
    'instagramNick': {
      'required': 'Instagram nickname is required',
      'minlength': 'Instagram nickname be at least 3 char long.'
    },
    'email': {
      'required': 'Email is required',
      'email': 'Email must be valid'
    },
    'phone': {
      'required': 'Phone number is required',
      'phone': 'Phone number must be valid'
    },
    'city': {
      'required': 'City is required',
      'minlength': 'City must be at least 2 char long.'
    },
    'budget': {
      'required': 'Budget is required'
    },
    'marketingType': {
      'required': 'Marketing type is required',
      'minlength': 'Marketing type must be at least 2 char long.'
    },
    'date': {
      'required': 'Date is required'
    }
  };

  groups = new FormControl();

  groupList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    if (this.data.formType === 'influencer') {
      this.buildFormInfluencer();
    } else {
      this.buildFormBrand();
    }
  }

  buildFormInfluencer() {
    this.userForm = this.formBuilder.group(
      {
        'name': ['', [
          Validators.required,
          Validators.minLength(2)
        ]],
        'secondName': ['', [
          Validators.required,
          Validators.minLength(2)
        ]],
        'instagramNick': ['', [
          Validators.required,
          Validators.minLength(3)
        ]],
        'youtubeNick': '',
        'email': ['', [
          Validators.required,
          Validators.email
        ]],
        'phone': ['', [
          Validators.required,
          Validators.minLength(8) // padaryti validacija type='number' neveikia minLength
        ]],
        'city': ['', [
          Validators.required,
          Validators.minLength(2)
        ]],
      }
    );
    this.userForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );
    this.onValueChanged();
  }

  buildFormBrand() {
    this.userForm = this.formBuilder.group(
      {
        'name': ['', [
          Validators.required,
          Validators.minLength(2)
        ]],
        'email': ['', [
          Validators.required,
          Validators.email
        ]],
        'phone': ['', [
          Validators.required,
          Validators.minLength(8) // padaryti validacija type='number' neveikia minLength
        ]],
        'city': ['', [
          Validators.required,
          Validators.minLength(2)
        ]],
        'budget': ['', [
          Validators.required
        ]],
        'marketingType': ['', [
          Validators.required,
          Validators.minLength(2)
        ]],
        'date': ['', [
          Validators.required,
        ]],
      }
    );
    this.userForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );
    this.onValueChanged();
  }


  onValueChanged(data?: any) {
    if (!this.userForm) { return; }

    const form = this.userForm;

    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessage[field];
          if (control.errors) {
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                this.formErrors[field] += `${(messages as {[key: string]: string})[key]} \n`;
              }
            }
          }
        }
      }
    }
  }

  testFoo() {
    this.influencer.cattegory = this.groups.value;
    console.log(this.userForm.value);
  }

}
