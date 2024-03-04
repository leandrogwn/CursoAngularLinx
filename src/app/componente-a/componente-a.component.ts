import { Component } from '@angular/core';
import { ComunicacaoService } from '../services/comunicacao.service';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent {

  mensagem: string = "";
  constructor(private comunicacaoService: ComunicacaoService){}

  enviarMensagem(){
    this.comunicacaoService.enviarMensagem(this.mensagem);
    this.mensagem = '';
  }
}
