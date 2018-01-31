import { Component, OnInit } from '@angular/core';
import { Transfers, TransferRes } from '../../shared/models/Transfers'

import { ApiService } from '../../shared/services/api.service'
import { JwtTokenService } from '../../shared/services/jwt.service'
import { LocalStorageService } from '../../shared/services/local-storage.service'
// import { PubSubService } from 'angular2-pubsub'

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
    // private pubsub: PubSubService
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
              //passa saldo para atualizar header
              this.pubsub.$pub('saldoUpdate', this.transfer.value)
              this.routerLink.navigate(['/dashboard/receipt/'])
              this.jwt.setToken(res.token);
              this.transfer_info.hash = res.hash;
              //passa para localstorage dados do comprovante
              this.http.post(this._urlDestino,{token: res.token, account: this.transfer.account_number_dest})
              .subscribe((dest: any) => {
                this.local.set('destinatario', dest.name)
                this.local.set('valor', this.transfer.value)
                this.local.set('hash', this.transfer_info.hash)
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


