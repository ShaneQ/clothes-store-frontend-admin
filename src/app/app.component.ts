import {Component} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [AppService],
})

export class AppComponent {

  public isLoggedIn = false;

  constructor(
    private _service: AppService){}

}
