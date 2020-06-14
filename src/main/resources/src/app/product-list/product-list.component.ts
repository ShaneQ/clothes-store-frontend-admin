import {Component, Input, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {ProductService} from '../product.service';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-list',
  providers: [AppService, ProductService],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  public products$: Observable<Product[]>;
  productCount: number;

  @Input()
  displayAmount: number;

  constructor(private _service: AppService, private _dataService: ProductService) {
    this.productCount = 0;
  }

  getProducts() {
    this.products$ = this._dataService.loadProducts();
  }

  ngOnInit(): void {
    console.log(this.displayAmount);
    this.getProducts();
  }

  onProductSelected(product: Product) {
    console.log('Card was selected');
    console.log(product);

  }
}
