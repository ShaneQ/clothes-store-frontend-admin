import {Component, Input, OnInit} from '@angular/core';
import {ProductSize} from '../model/productSize';

@Component({
  selector: 'app-product-detail-sizes',
  templateUrl: './product-detail-sizes.component.html'
})
export class ProductDetailSizesComponent implements OnInit {

  @Input()
  productSizes: ProductSize[];


  constructor() { }

  ngOnInit(): void {
  }

}
