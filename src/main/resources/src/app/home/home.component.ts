import {Component} from '@angular/core';
import {AppService} from '../app.service'

@Component({
  selector: 'app-home-header',
  providers: [AppService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})

export class HomeComponent {
  public isLoggedIn = false;

  constructor(
    private _service: AppService){}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(){
    this.isLoggedIn = this._service.checkCredentials();
    const i = window.location.href.indexOf('code');
    if (!this.isLoggedIn && i !== -1){
      this._service.retrieveToken(window.location.href.substring(i + 5));
    }
  }

  login() {
    window.location.href = 'http://localhost:8083/auth/realms/baeldung/protocol/openid-connect/auth?response_type=code&&scope=write%20read&client_id=' +
      this._service.clientId + '&redirect_uri=' + this._service.redirectUri;
  }

  logout() {
    this._service.logout();
  }


}
