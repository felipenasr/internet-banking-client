import { Injectable } from '@angular/core';
import { JwtTokenService } from './jwt.service';

@Injectable()
export class AuthService {
  
  public check: Boolean = false;

  constructor(
    private jwtToken: JwtTokenService
  ) { 
    this.check = this.jwtToken.getToken() ? true : false;  
  }

  logout(){
    this.check = false;
    this.jwtToken.setToken(null);
  }
}