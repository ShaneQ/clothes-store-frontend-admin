import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AppService} from './app.service';
import {Product} from './model/product';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = environment.resourceUrl +'public/product';
  private adminProductUrl = environment.resourceUrl +'admin/product';

  constructor(private _service: AppService) { }

  loadProducts(): Observable<Product[]>{
    return this._service.getProductsResource(this.productUrl);

  }

  createProduct(product: Product): Observable<any>{
    return this._service.postProductResource(product, this.adminProductUrl)
  }

  updateProduct(product: Product): Observable<any>{
    return this._service.putProductResource(product, this.adminProductUrl)
  }

  getProduct(productId): Observable<Product> {
    return this._service.getProductResource(this.productUrl + '/' + productId);
  }

  hide(productId: number): Observable<any> {
    return this._service.putProductHideChangeResource(this.adminProductUrl + '/hide/' + productId)
  }

  unhide(productId: number): Observable<any> {
    return this._service.putProductHideChangeResource(this.adminProductUrl + '/unhide/' + productId)
  }

  delete(productId: number): Observable<any> {
    return this._service.deleteProductResource(this.adminProductUrl + '/' + productId)
  }
}
