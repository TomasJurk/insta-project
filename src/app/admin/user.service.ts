import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  id: string;
  className: string;

  constructor() { }

  getUser (id, className) {
    this.id = id;
    this.className = className;
  }

}
