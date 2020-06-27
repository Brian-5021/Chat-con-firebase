import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(public chat: ChatService) { }

  ngOnInit(): void {
  }

  ingresar(proveedor) {
    console.log(proveedor);
    this.chat.login(proveedor);
  }

}
