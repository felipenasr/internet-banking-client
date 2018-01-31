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
      .subscribe((res: any) => {
        //res = {origin: [], dest: []}
        console.log(res);
        //transações de débito (origin)
        this.listaTransfDeb = res.origin;
        //transaçoes de crédito (dest)
        this.listaTransfCred = res.dest;
      }, err => err);
  }
  isActive = false  
  lastTwo(){
    //no click do botao de x dias
    let dias = 2;
    // pegar esses x dias
    // pegar data atual - x dias
    let tempo = new Date().getDate()-dias
    //filtrar array
    this.listaTransfCred = this.listaTransfCred.filter((trans) => {
      let diaAtual = new Date(trans.date).getDate()
      if (diaAtual >= tempo) {
        // console.log(trans);
        return trans
      }
    })
    this.listaTransfDeb = this.listaTransfDeb.filter((trans) => {
      let diaAtual = new Date(trans.date).getDate()
      if (diaAtual >= tempo) {
        // console.log(trans);
        return trans
      }
    });
  }
  lastFive() {
 
    //no click do botao de x dias
    let dias = 5;
    // pegar esses x dias
    // pegar data atual - x dias
    let tempo = new Date().getDate() - dias
    //filtrar array
    this.listaTransfCred = this.listaTransfCred.filter((trans) => {
      let diaAtual = new Date(trans.date).getDate()
      if (diaAtual >= tempo) {
        // console.log(trans);
        return trans
      }
    })
    this.listaTransfDeb = this.listaTransfDeb.filter((trans) => {
      let diaAtual = new Date(trans.date).getDate()
      if (diaAtual >= tempo) {
        // console.log(trans);
        return trans
      }
    });
    //exibir transaçoes nos ultimos x dias

  }

}
