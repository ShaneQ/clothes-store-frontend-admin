import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Cookie} from 'ng2-cookies';
import {Router} from '@angular/router';
import {interval} from "rxjs";
import {takeWhile} from "rxjs/operators";

@Component({
  selector: 'app-logout',
  templateUrl: './pre-login.component.html',
  styleUrls: ['./pre-login.component.scss'],
  providers: [AppService]
})
export class PreLoginComponent implements OnInit {

  public isLoggedIn = false;

  constructor(
    private _service: AppService,
    private _router: Router
    ){}



  login() {
    window.location.href = 'http://localhost:8083/auth/realms/baeldung/protocol/openid-connect/auth?response_type=code&&scope=write%20read&client_id=' +
      this._service.clientId + '&redirect_uri=' + this._service.redirectUri;
  }

/*  ngOnInit(): void {
    interval(5000)
      .subscribe(() => {
        const bool = this._service.checkCredentials();
        if (bool){
          console.log('PRE-LOGIN:logged in');

          this._router.navigate(['/base']);
        }else{
          console.log('PRE-LOGIN:not logged in');
          //Cookie.delete('access_token');
        }
      });
  }*/

  ngOnInit(){
    this.isLoggedIn = this._service.checkCredentials();
    const i = window.location.href.indexOf('code');
    if(!this.isLoggedIn && i != -1){
      this._service.retrieveToken(window.location.href.substring(i + 5));
    }
  }


}
