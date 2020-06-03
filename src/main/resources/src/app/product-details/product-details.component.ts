import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [ActivatedRoute, Router]
})
export class ProductDetailsComponent {
  public id;

  constructor(private router: Router,
              public route: ActivatedRoute) {

    this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
  }

}
