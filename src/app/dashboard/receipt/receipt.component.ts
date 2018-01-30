import { Component, OnInit } from '@angular/core';
import * as Pubsub from 'pubsub-js'

import { LocalStorageService } from '../../shared/services/local-storage.service'

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  nomeDestinatario = ''

  constructor(private local: LocalStorageService) { }

  ngOnInit() {
    // Pubsub.subscribe('DESTINATARIO',(res) => {
    //   this.nomeDestinatario = res.name
    // })
    this.nomeDestinatario = localStorage.getItem("destinatario")
  }

}
