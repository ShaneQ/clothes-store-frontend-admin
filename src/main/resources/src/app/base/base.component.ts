import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  providers: [AppService]

})
export class BaseComponent implements OnInit {

  public isLoggedIn = false;

  constructor(
    private _service:AppService){}

  logout() {
    console.log("Logged Out");
    this._service.logout();
  }

  ngOnInit(): void {
    console.log("Landed on base page");
    let bool = this._service.checkCredentials();
    console.log(bool)
  }

}
