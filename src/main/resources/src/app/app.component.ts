import {Component} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [AppService],
})

export class AppComponent {

  public isLoggedIn = false;

  constructor(
    private _service:AppService){}

  login() {
    window.location.href = 'http://localhost:8083/auth/realms/baeldung/protocol/openid-connect/auth?response_type=code&&scope=write%20read&client_id=' +
      this._service.clientId + '&redirect_uri='+ this._service.redirectUri;
  }

}
