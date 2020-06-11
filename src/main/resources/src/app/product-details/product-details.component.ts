import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ScriptService} from '../script.service';
import {AppService} from '../app.service';
import {ProductService} from '../product.service';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [ScriptService, ProductService]
})
export class ProductDetailsComponent implements OnInit{
  public id;
  public product: Product;
  public defaultImageUrl = 'assets/img/products/product-6.jpg';



  constructor(private _router: Router, private _route: ActivatedRoute, private _scriptLoader: ScriptService, private _app: ProductService) {
  }

  ngOnInit() {
    const productId = this._route.snapshot.paramMap.get('productId');
    this._app.getProduct(productId).subscribe(result => this.product = result);

    this._scriptLoader.load('flickity').then(data => {
    }).catch(error => console.log(error));
  }

}
