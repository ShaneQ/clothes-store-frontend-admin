import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies';

@Component({
  selector: 'app-navbar-landing',
  templateUrl: './navbar-landing.component.html',
  styleUrls: ['./navbar-landing.component.scss']
})
export class NavbarLandingComponent implements OnInit {

  public isLoggedIn = false;

  constructor(
    private _service: AppService,
    private _router: Router
  ){}

  login() {
    Cookie.delete('access_token');
    window.location.href = 'http://localhost:8083/auth/realms/baeldung/protocol/openid-connect/auth?response_type=code&&scope=write%20read&client_id=' +
      this._service.clientId + '&redirect_uri=' + this._service.redirectUri;
  }

  ngOnInit(){
    this.isLoggedIn = this._service.checkCredentials();
    const i = window.location.href.indexOf('code');
    if (!this.isLoggedIn && i !== -1){
      this._service.retrieveToken(window.location.href.substring(i + 5));
    }
  }
}
