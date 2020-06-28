import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ScriptService} from '../script.service';
import {ProductService} from '../product.service';
import {Product} from '../model/product';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [ScriptService, ProductService],
})
export class ProductDetailsComponent implements OnInit{
  public id;
  public product: Product;
  public defaultImageUrl = 'assets/img/products/product-6.jpg';
  public productOccasions: string;
  public freeMember: boolean;



  minDate: Date;
  maxDate: Date;
  private isMemberInfoBtnVis: boolean;
  private remainingBookings: number;

  constructor(private _router: Router, private _route: ActivatedRoute, private _scriptLoader: ScriptService, private _app: ProductService) {

    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate() + 180);
  }

  async ngOnInit(): Promise<void> {
    this._scriptLoader.load('flickity').then(data => {
    }).catch(error => console.log(error));

    const productId = this._route.snapshot.paramMap.get('productId');
    this.product = await this._app.getProduct(productId).toPromise();
    this.productOccasions = this.product.occasions.map(x => x.occasion.name).join(',');
    this.freeMember = false;
    this.remainingBookings = 1;

    if (!this.freeMember){
      this.memberSelection();
    }else{
      this.freeMemberSelection();
    }

  }

  freeMemberSelection(): void{

  }

  memberSelection(): void{

  }

  onMembershipClick(show){
    if (this.freeMember){
      this.isMemberInfoBtnVis = show;
    }
  }
}
