import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  
  constructor(
    private auth: AuthService
  ) { }
  
  ngOnInit() {
  }
  
  logout(){
    this.auth.logout();
  }
  
  isFull = false  
  toggleMenu(){
    let bool = this.isFull
    this.isFull = bool === false ? true : false;
  }

  getStyle() {
    if (this.isFull === false) {
      return '#303F9F'
    } else {
      return '#FFFFFF'
    }
  }

}
