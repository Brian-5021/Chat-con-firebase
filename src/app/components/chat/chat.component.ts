import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  mensaje: string = '';

  elemento: any;

  // tslint:disable-next-line: variable-name
  constructor(public _cs: ChatService ) {

    this._cs.cargarMensajes().subscribe( () => {
      setTimeout( () => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20);
    });
   }

  ngOnInit(): void {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviar_mensaje(){
    console.log(this.mensaje);

    if (this.mensaje.length === 0){
      return;
    }

    this._cs.agregarMensaje(this.mensaje).then( () => this.mensaje = '')
    .catch( (err) => console.error('error al enviar el mensaje'));
  }

}
