import { Component, OnInit } from '@angular/core'
import * as Pubsub from 'pubsub-js'

import { UserResponse } from '../../shared/models/UserResponse'
import { ApiService } from '../../shared/services/api.service'
import { JwtTokenService } from '../../shared/services/jwt.service'
import { AuthService } from '../../shared/services/auth.service'

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
  ) {

    // Pubsub.subscribe('SALDO_ATUAL', (res: number)=> {
    //   this.user_info.balance = Number(this.user_info.balance) - res
    //   console.log('subscribe: ', this.user_info.balance)
    // })
   }

  user_info = new UserResponse();

  private _url = 'user'

  ngOnInit() {
    this.getUser()
    // Pubsub.subscribe('SALDO_ATUAL', (res: number)=> {
    //   this.user_info.balance = Number(this.user_info.balance) - res
    //   console.log('subscribe: ', this.user_info.balance)
    // })
  }

  getUser(){
    let token = {token: this.jwt.getToken()}
    this.http.post(this._url, token)
        .subscribe((res: UserResponse) => {
          this.user_info = res
        }, err => {
          this.auth.logout()
        })
  }
}
