import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../model/order';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html'
})
export class BookingSummaryComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal){}

  @Input() public order: Order;

  ngOnInit(): void {
  }

}
