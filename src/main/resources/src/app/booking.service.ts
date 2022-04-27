import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {AppService} from "./app.service";
import {Observable} from "rxjs";
import {BookingRequest} from "./model/bookingRequest";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private adminUrl = environment.resourceUrl + 'admin';

  constructor(private _service: AppService) {
  }


  getBookings(): Observable<BookingRequest[]> {
    return this._service.getBookingsResource(this.adminUrl + "/bookings");

  }

  getBookingsForUser(userId: string): Observable<BookingRequest[]> {
    return this._service.getBookingsResource(this.adminUrl + "/bookings/" + userId);
  }

  updateBookingStatus(value: string, id: number) {
    this._service.updateBookingStatus(this.adminUrl + "/booking/" + id + "/status/" + value);
  }
}
