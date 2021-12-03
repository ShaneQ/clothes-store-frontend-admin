import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../model/user";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [UsersService],

})
export class UsersComponent implements OnInit {

  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  posts;
  public users$: Observable<User[]>;
  public users: User[]
  private hasUsers: boolean =false

  constructor(private _service: UsersService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.users$ = this._service.getUsers()
    this.users$.subscribe(data => this.users = data)

  }

  activate(id: number) {
    this._service.activateUser(id).subscribe()
  }

  deactivate(id: number) {
    console.log("WILL BUILD DEACTIVATE LATER")
  }

  memberships = {1: "Casual", 2: "Chic"}
}
