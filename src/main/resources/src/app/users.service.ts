import { Injectable } from '@angular/core';
import {AppService} from "./app.service";
import {User} from "./model/user";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private adminUrl = environment.resourceUrl +'admin/users';

  constructor(private _service: AppService) { }


  getUsers(): Observable<User[]>{
    return this._service.getUsersResource(this.adminUrl);

  }

  activateUser(id: number): Observable<any>{
    return this._service.activateUser(this.adminUrl+"/user/"+id)
  }
}
