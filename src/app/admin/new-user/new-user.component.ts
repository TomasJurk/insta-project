import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import * as Parse from 'parse';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit, OnDestroy {

  id: string;
  currentUser: any;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private _uS: UserService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this._uS.className && this.id) {
        this.getUserObject();
      }
    });
  }

  getUserObject() {
    const Data = Parse.Object.extend(this._uS.className);
    const query = new Parse.Query(Data);
    query.get(this._uS.id, {
      success: (data) => {
        this.currentUser = data;
        console.log(this.currentUser);
      },
      error: (data, error) => {
        console.log(error.message);
      }
    });
  }

  confirmInfuelcer() {
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
