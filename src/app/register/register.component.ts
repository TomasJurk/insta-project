import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';

type UserFields = 'name' | 'email' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;
  formErrors: FormErrors = {
    'name': '',
    'email': '',
    'password': ''
  };
  validationMessage = {
    'email': {
      'required': 'Email is required',
      'email': 'Email must be valid'
    },
    'name': {
      'required': 'Name is required',
      'minlength': 'Name must be at least 3 char long.'
    },
    'password': {
      'required': 'Password is required',
      'pattern': 'Password must contain at least one letter and number.',
      'minlength': 'Password must be at least 6 char long.',
      'maslength': 'Password cannot be more than 40 chars long.'
    }
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.formBuilder.group(
      {
        'name': ['', [
          Validators.required,
          Validators.minLength(3)
        ]],
        'email': ['', [
          Validators.required,
          Validators.email
        ]],
        'password': ['', [
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(40),
          Validators.required
        ]]
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

 /*  signUp() {
    this._aS.emailSignUp(this.userForm.value['email'], this.userForm.value['name'], this.userForm.value['password'])
    .then(
      () => this.router.navigate(['/dashboard'])
    );
  } */

}
