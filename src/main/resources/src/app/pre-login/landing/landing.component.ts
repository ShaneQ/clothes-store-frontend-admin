import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {Router} from '@angular/router';
import {ScriptService} from '../../script.service';

@Component({
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  providers: [AppService, ScriptService]
})
export class LandingComponent implements OnInit {

  public isLoggedIn = false;

  constructor(
    private _service: AppService,
    private _router: Router,
    private _script: ScriptService
    ){}

  login() {
    window.location.href = 'http://localhost:8083/auth/realms/baeldung/protocol/openid-connect/auth?response_type=code&&scope=write%20read&client_id=' +
      this._service.clientId + '&redirect_uri=' + this._service.redirectUri;
  }

  ngOnInit(){
    this._script.load('flickity').then(data => {
      console.log('script loaded ', data);
    }).catch(error => console.log(error));

    this.isLoggedIn = this._service.checkCredentials();
    const i = window.location.href.indexOf('code');
    if (!this.isLoggedIn && i !== -1){
      this._service.retrieveToken(window.location.href.substring(i + 5));
    }
  }


}
