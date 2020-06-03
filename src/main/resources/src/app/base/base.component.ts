import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  providers: [AppService]

})
export class BaseComponent implements OnInit {

  constructor(
    private _service: AppService,
    private _router: Router
  ){}

  ngOnInit(){
    if (!this._service.checkCredentials()){
      this._router.navigate(['']);
    }
  }

}
