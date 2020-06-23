import { Component, OnInit } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'})
export class ProfileComponent implements OnInit {
  public accountUrl =  'http://localhost:8083/auth/realms/baeldung/account/';

  constructor( private _keycloak: KeycloakService) { }


  ngOnInit(): void {

  }

}
