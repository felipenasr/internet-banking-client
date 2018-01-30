import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

class Mensagens {

  constructor(private msg: string){}

  get texto(){
      return this.msg
  }

}