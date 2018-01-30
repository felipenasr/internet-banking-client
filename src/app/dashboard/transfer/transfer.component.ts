import { Component, OnInit } from '@angular/core';
import { Transfers, TransferRes } from '../../shared/models/Transfers'
import * as Pubsub from 'pubsub-js'

import { ApiService } from '../../shared/services/api.service'
import { JwtTokenService } from '../../shared/services/jwt.service'
import { LocalStorageService } from '../../shared/services/local-storage.service'

import { Router } from '@angular/router';
import { UserResponse } from '../../shared/models/UserResponse'

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  
  router: any;


  constructor(
    private http: ApiService,
    private jwt: JwtTokenService,
    private routerLink: Router,
    private local: LocalStorageService
  ) { }

  private _url = "transfers";
  private _urlDestino = "acc_info"
  transfer= new Transfers('',0,'');
  
  transfer_info = new TransferRes('',false,'','');

  destino_info

  ngOnInit() {
  }

  newTransfer(){
    this.transfer.token = this.jwt.getToken();
    this.http.post(this._url, this.transfer)
        .subscribe((res:TransferRes)=>{
          this.transfer_info = res;
          console.log(this.transfer_info.error)
          if(this.transfer_info.success === true) {
              this.routerLink.navigate(['/dashboard/receipt/'])
              // Pubsub.publish('SALDO_ATUAL', this.transfer.value)
              this.local.set('saldo', this.transfer.value)
              this.jwt.setToken(res.token);
              this.transfer_info.hash = res.hash;
              this.http.post(this._urlDestino,{token: res.token, account: this.transfer.account_number_dest})
              .subscribe(res => {
                console.log(res)
                // Pubsub.publish('DESTINATARIO', res)
                this.local.set('destinatario', res)
              }

              )
          }
          setTimeout(
            () => this.transfer_info = new TransferRes('',false,'','')
            , 8000
        )
        },error => {
          console.log(error);
        })
  }

  // getUser(token){
  //   this.http.post(this._url, token)
  //       .subscribe((res: UserResponse) => {
  //         this.destino_info = res;
  //       })
  // }


}


