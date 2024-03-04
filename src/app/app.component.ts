import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--
  <app-title *ngIf="exibirComponente"></app-title>
  <br>
  <div *ngIf="exibirBotoes">
  <button (click)="DestruirComponente()">Destruir Componente</button>
  </div>
  <button (click)="AlternarExibirBotoes(nomeBotao)">{{nomeBotao}}</button>
  <br><hr><br>
  <app-minha-lista-de-tarefas></app-minha-lista-de-tarefas>
  <br><hr><br>
  <app-produto-info></app-produto-info>
  <br><hr><br>
  <app-nome-usuario></app-nome-usuario>
  <br><hr><br>
  <ng-template #itemTemplate let-item>
  {{ item }} - Exemplo  
  </ng-template>

  <app-lista [titulo]="'Minha Lista'" [itens]="['Item 1', 'Item 2', 'Item 3']" [itemTemplate]="itemTemplate">
  <p>Esta é uma mensagem</p>
  </app-lista>

  <app-tarefa-item [nomeTarefa]="tarefa.nome" [concluida]="tarefa.status" (tarefaConcluida)="marcarTarefaConcluida(tarefa)"></app-tarefa-item>

  <app-componente-a></app-componente-a>
  <app-componente-b></app-componente-b>
  <app-contador></app-contador>
  <app-dados></app-dados>
  <app-form></app-form>
  
  -->

  <app-header></app-header>
  <nav>
    <a routerLink="/">Página Inicial</a>
    <a routerLink="/perfil/1">Perfil do Usuário</a>
  </nav>
  
  <router-outlet></router-outlet>


  ` 
})
export class AppComponent implements OnInit {

  public tarefa: any = {
    "nome": "Estudar angular",
    "status": false
  }

  public marcarTarefaConcluida(tarefa: any){
    tarefa.status = true;
  }

  public exibirComponente: boolean = true;
  
  public exibirBotoes: boolean = true;

  public nomeBotao: string = "Esconder Botão"

  /**
   * AlternarExibirBotoes
   */
  public AlternarExibirBotoes(p:string) {
    this.exibirBotoes = !this.exibirBotoes;
    if (p == "Esconder Botão"){
      this.nomeBotao = "Mostrar Botão"
    }else{
      this.nomeBotao = "Esconder Botão"
    }
  }

  /**
   * DestruirComponente
   */
  public DestruirComponente() {
    this.exibirComponente = false;
  }

  constructor(){}
  
  ngOnInit(): void{
    
  }
}
