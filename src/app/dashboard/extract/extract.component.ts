import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { JwtTokenService } from '../../shared/services/jwt.service';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.css']
})
export class ExtractComponent implements OnInit {

  // numContaOrigem = HeaderComponent.
  listaTransfCred = [];
  listaTransfDeb = [];
  private route = 'extract';

  constructor(
    private http: ApiService,
    private jwt: JwtTokenService
  ) { }

  ngOnInit() {
    this.getList()
  }

<<<<<<< HEAD
  getList(){
    this.http.post(this.route, {token: this.jwt.getToken()})
             .subscribe(res =>{
               console.log(res.origin);
              //  this.listaTransfers = res.origin;
             }, err => err);
=======

  getList() {
    this.http.post(this.route, { token: this.jwt.getToken() })
      .subscribe(res => {
        //res = {origin: [], dest: []}
        console.log(res);
        //transações de débito (origin)
        this.listaTransfDeb = res.origin;
        //transaçoes de crédito (dest)
        this.listaTransfCred = res.dest;
      }, err => err);
>>>>>>> 9dbaefdc4d83b925416f9056356affda701a09ec
  }

}
