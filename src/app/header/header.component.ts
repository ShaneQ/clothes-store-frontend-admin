import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AppService]
})
export class HeaderComponent implements OnInit {

  public isLoggedIn = false;

  constructor(
    private _service: AppService){}

  logout() {
    console.log('Logged Out');
    this._service.logout();
  }

  ngOnInit(): void {
    console.log('Landed on base page');
    const bool = this._service.checkCredentials();
    console.log(bool);
  }

}
