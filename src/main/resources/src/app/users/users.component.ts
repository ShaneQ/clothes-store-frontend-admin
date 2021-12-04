import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [UsersService],

})
export class UsersComponent implements OnInit {
  memberships = {1: "Casual", 2: "Chic"}
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  posts;
  public users: User[]
  private hasUsers: boolean =false

  constructor(private _service: UsersService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this._service.getUsers().subscribe(data => this.users = data)

  }

  activate(id: number) {

    this._service.activateUser(id).subscribe(() => this._service.getUsers().subscribe(data => this.users = data))


  }

  deactivate(id: number) {
    this._service.getUsers().subscribe(data => this.users = data)

    console.log("WILL BUILD DEACTIVATE LATER")
  }
}
