import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import * as Parse from 'parse';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  currentUser;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.currentUser = Parse.User.current();
    if (!this.currentUser) {
      this.router.navigate(['/admin/login']);
    }
  }



  signOut() {
    Parse.User.logOut().then(() => {
      this.currentUser = Parse.User.current();
      this.router.navigate(['/admin/login']);
    });
  }

}



