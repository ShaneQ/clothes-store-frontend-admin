import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service'

@Component({
  selector: 'app-home-header',
  providers: [AppService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})

export class HomeComponent implements OnInit{
  public isLoggedIn = false;

  constructor(
    private _service: AppService){}

  ngOnInit(){
    this.isLoggedIn = this._service.checkCredentials();
  }

  logout() {
    this._service.logout();
  }


}
