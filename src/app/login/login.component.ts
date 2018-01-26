import {NgModule,Component,Pipe,OnInit} from '@angular/core';
import { Router } from '@angular/router'
import {ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';


import { LoginResponse } from "../shared/models/LoginResponse";

import { ApiService } from "../shared/services/api.service";
import { AuthService } from "../shared/services/auth.service";
import { JwtTokenService } from "../shared/services/jwt.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private http: ApiService,
    private auth: AuthService,
    private jwt: JwtTokenService
  ) { }
  private api_url = 'login';
  myform: FormGroup
  cpf: FormControl
  senha: FormControl

  ngOnInit() {
    this.validate();
    this.checkToken();
  }

  login() {
    let user = {
      user: this.cpf.value,
      pass: this.senha.value
    };
    
    this.http.post(this.api_url, user)
        .subscribe((res: LoginResponse) =>{
          if(!res.error){
            this.jwt.setToken(res.token);
            this.router.navigate(['/dashboard']);            
          }
        }, err => {console.log(err)});
    
  }

  validate(){
    this.cpf = new FormControl('', Validators.required);
    this.senha = new FormControl('', Validators.required);
    
    this.myform = new FormGroup({
      cpf: this.cpf,
      senha: this.senha
    });
  }

  checkToken(){
    if(this.auth.check){
      this.router.navigate(['/dashboard']);      
    }
  }
}
