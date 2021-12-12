import {Component, OnInit} from '@angular/core';
import {BookingRequest} from "../model/bookingRequest";
import {BookingService} from "../booking.service";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  providers: [BookingService]
})
export class BookingsComponent implements OnInit {

  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  posts;
  public bookings: BookingRequest[]

  constructor(private _service: BookingService) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this._service.getBookings().subscribe(data => this.bookings = data)

  }

}
