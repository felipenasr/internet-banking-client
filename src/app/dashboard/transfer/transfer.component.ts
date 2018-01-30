import { Component, OnInit } from '@angular/core';
import { Transfers, TransferRes } from '../../shared/models/Transfers'

import { ApiService } from '../../shared/services/api.service'
import { JwtTokenService } from '../../shared/services/jwt.service'

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  router: any;


  constructor(
    private http: ApiService,
    private jwt: JwtTokenService
  ) { }

  private _url = "transfers";
  transfer= new Transfers('',0,'');
  
  transfer_info = new TransferRes('',false);

  ngOnInit() {
  }

  newTransfer(){
    this.transfer.token = this.jwt.getToken();
    this.http.post(this._url, this.transfer)
        .subscribe((res:TransferRes)=>{
          this.transfer_info = res;
          console.log(this.transfer_info.error)
          if(this.transfer_info.success === true) {
            //redirecionar pra componente de comprovante
          }
          setTimeout(
            () => this.transfer_info = new TransferRes('',false)
            , 8000
        )
        },error => {
          console.log(error);
        })
  }


}


