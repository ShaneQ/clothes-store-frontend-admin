import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {KeycloakService} from 'keycloak-angular';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  providers: [AppService]
})
export class NavbarComponent implements OnInit {


  constructor(
    private _service: AppService, private _keycloak: KeycloakService){}

  logout() {
    console.log('Logged Out');
    this._keycloak.logout(environment.baseUrl);
  }

  ngOnInit(): void {
  }
}
