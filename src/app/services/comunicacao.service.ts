import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacaoService {

  private mensagemSubject = new Subject<string>();
  mensagem$ = this.mensagemSubject.asObservable();

  constructor() { }

  enviarMensagem(mensagem: string){
    this.mensagemSubject.next(mensagem);
  }
}
