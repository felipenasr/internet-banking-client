import {NgModule,Component,Pipe,OnInit} from '@angular/core';
import { Router } from '@angular/router'
import {ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  myform: FormGroup
  cpf: FormControl
  senha: FormControl

  ngOnInit() {
    this.validate(); 
  }

  login() {
    this.router.navigate(['/dashboard']);
  }

  validate(){
    this.cpf = new FormControl('', Validators.required);
    this.senha = new FormControl('', Validators.required);
    
    this.myform = new FormGroup({
      cpf: this.cpf,
      senha: this.senha
    });
  }
}
