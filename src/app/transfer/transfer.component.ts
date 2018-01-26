import { Component, OnInit } from '@angular/core';
import { Transfers } from "../shared/models/Transfers";

import { ApiService } from "../shared/services/api.service";
import { JwtTokenService } from "../shared/services/jwt.service";

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {


  constructor(
    private http: ApiService,
    private jwt: JwtTokenService
  ) { }

  private _url = "transfers";
  transfer= new Transfers('',0,'');
  


  ngOnInit() {
  }

  newTransfer(){
    this.transfer.token = this.jwt.getToken();
    this.http.post(this._url, this.transfer)
        .subscribe((res)=>{
          console.log(res)
        },error => {
          console.log(error);
        })
  }


}
