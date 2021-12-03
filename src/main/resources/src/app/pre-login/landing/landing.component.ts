import { Component, OnInit } from '@angular/core';
import {ScriptService} from '../../script.service';
import {KeycloakService} from 'keycloak-angular';

@Component({
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  providers: [ScriptService]
})
export class LandingComponent implements OnInit {

  constructor(
    private _script: ScriptService,
    private _keycloak: KeycloakService
    ){}

  ngOnInit(){
  }
}
