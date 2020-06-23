import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AppService]
})
export class NavbarComponent implements OnInit {

  public isLoggedIn = false;

  constructor(
    private _service: AppService, private _keycloak: KeycloakService){}

  logout() {
    console.log('Logged Out');
    this._keycloak.logout('http://localhost:8089/');
  }

  ngOnInit(): void {
   // this._keycloakAppService.getProductResource("http://localhost:8083/auth/realms/baeldung/account/");
  }
}
