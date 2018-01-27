import { Component, OnInit } from '@angular/core';

import { UserResponse } from "../models/UserResponse";

import { ApiService } from "../services/api.service";
import { JwtTokenService } from "../services/jwt.service";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  constructor(
    private http: ApiService,
    private jwt: JwtTokenService,
    private auth: AuthService
  ) { }

  user_info = new UserResponse();

  private _url = 'user'

  ngOnInit() {
    this.getUser()
  }

  getUser(){
    let token = {token: this.jwt.getToken()}
    this.http.post(this._url, token)
        .subscribe((res: UserResponse) => {
          this.user_info = res;
        }, err => {
          this.auth.logout();
        })
  }
}
