import { Component, OnInit, OnChanges } from '@angular/core';

import { LocalStorageService } from '../../shared/services/local-storage.service'


@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit, OnChanges {

  name = ''
  value = 0
  hash = ''
  conta = ''
  data: Date

  constructor(private local: LocalStorageService) { }

  ngOnInit() {
    this.data = new Date()
    this.name = this.local.get('destinatario')
    this.value = this.local.get('valor')
    this.hash = this.local.get('hash')
    this.conta = this.local.get('conta_destino')
  }

  ngOnChanges() {
    this.data = new Date()
    this.name = this.local.get('destinatario')
    this.value = this.local.get('valor')
    this.hash = this.local.get('hash')
    this.conta = this.local.get('conta_destino')
  }

}
