import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {AppService} from "./app.service";
import {Observable} from "rxjs";
import {User} from "./model/user";
import {BookingRequest} from "./model/bookingRequest";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private adminUrl = environment.resourceUrl +'admin';

  constructor(private _service: AppService) { }


  getBookings(): Observable<BookingRequest[]>{
    return this._service.getBookingsResource(this.adminUrl+"/bookings");

  }
  getBooking(userId): Observable<BookingRequest>{
    return this._service.getBookingResource(this.adminUrl+"/booking/"+userId);
  }

}
