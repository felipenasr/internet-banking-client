import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.css']
})
export class ExtractComponent implements OnInit {

  listaTransfers = [
    {dia: 12, mes: 'Jan', origem: 'MercadoCar Faria Lima', tipo: 'Cartão de Crédito', valor: 185},
    {dia: 13, mes: 'Jan', origem: 'Pedro Carlos', tipo: 'Transferência: TEF', valor: 250},
    {dia: 14, mes: 'Jan', origem: 'José Fernando', tipo: 'Transferência: DOC', valor: 750},
    {dia: 14, mes: 'Jan', origem: 'BK Shopping Eldorado', tipo: 'Cartão de Crédito', valor: 75} 
  ]

  constructor() { }

  ngOnInit() {
  }

}
