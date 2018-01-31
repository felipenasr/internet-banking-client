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


  getList() {
    this.http.post(this.route, { token: this.jwt.getToken() })
      .subscribe(res => {
        //res = {origin: [], dest: []}
        console.log(res);
        //transações de débito (origin)
        this.listaTransfCred = res.origin;
        //transaçoes de crédito (dest)
        this.listaTransfDeb = res.dest;
      }, err => err);
  }

}
