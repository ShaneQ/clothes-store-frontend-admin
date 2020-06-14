import {Component, OnInit} from '@angular/core';
import {ScriptService} from '../script.service';

@Component({
  selector: 'app-shop-topbar',
  templateUrl: './shop-categories.component.html',
  providers: [ScriptService]
})
export class ShopCategoriesComponent implements OnInit {
  private loadAPI: Promise<unknown>;
  private url = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';


  constructor(private _script: ScriptService) {
  }

  ngOnInit() {
    this._script.load('flickity').then(data => {
     // console.log('script loaded ', data);
    }).catch(error => console.log(error));
  }

}
