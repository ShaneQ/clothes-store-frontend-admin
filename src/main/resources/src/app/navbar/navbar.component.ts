import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AppService]
})
export class NavbarComponent implements OnInit {

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
