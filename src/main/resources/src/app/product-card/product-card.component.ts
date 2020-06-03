import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent implements OnInit {

  @Input()
  product: Product;

  @Output('productSelected')
  productEmitter = new EventEmitter<Product>();

  public defaultImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg';



  constructor() { }

  ngOnInit() {
  }

  onProductSelected(){
    console.log('Product was selected');
    this.productEmitter.emit(this.product);
  }

}
