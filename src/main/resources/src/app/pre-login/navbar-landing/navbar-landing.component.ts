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

  ngOnInit(){

  }
}
