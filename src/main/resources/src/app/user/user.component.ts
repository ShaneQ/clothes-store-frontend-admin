import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../model/user";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[UsersService]
})
export class UserComponent implements OnInit {

  public user : User

  constructor(    private _router: Router,
                  private _route: ActivatedRoute, private _userService: UsersService) { }

  ngOnInit(): void {
    const userId = this._route.snapshot.paramMap.get('userId');
    this._userService.getUser(userId).subscribe(data => this.user = data)
  }

}
