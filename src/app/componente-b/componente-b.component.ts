import { Component, OnInit } from '@angular/core';
import { ComunicacaoService } from '../services/comunicacao.service';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {

  mensagemRecebida: string = '';

  constructor(private comunicacaoService: ComunicacaoService){}

  ngOnInit(): void {

    this.comunicacaoService.mensagem$.subscribe((mensagem)=>{
      this.mensagemRecebida = mensagem;
    })

  }


}
