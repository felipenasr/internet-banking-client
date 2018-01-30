import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { JwtTokenService } from '../../shared/services/jwt.service';


@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.css']
})
export class ExtractComponent implements OnInit {

  listaTransfers = [];
  private route = 'extract';

  constructor(
    private http: ApiService,
    private jwt: JwtTokenService
  ) { }

  ngOnInit() {
    this.getList()
  }

  getList(){
    this.http.post(this.route, {token: this.jwt.getToken()})
             .subscribe(res =>{
              //  console.log(res.origin);
               this.listaTransfers = res.origin;
             }, err => err);
  }

}
