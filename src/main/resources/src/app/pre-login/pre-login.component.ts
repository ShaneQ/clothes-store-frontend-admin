import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {Cookie} from "ng2-cookies";

@Component({
  selector: 'app-logout',
  templateUrl: './pre-login.component.html',
  styleUrls: ['./pre-login.component.scss'],
  providers:[AppService]
})
export class PreLoginComponent implements OnInit {

  constructor(
    private _service:AppService){}

  ngOnInit(): void {
    Cookie.delete('access_token');
  }
  login() {
    window.location.href = 'http://localhost:8083/auth/realms/baeldung/protocol/openid-connect/auth?response_type=code&&scope=write%20read&client_id=' +
      this._service.clientId + '&redirect_uri='+ this._service.redirectUri;
  }


}
