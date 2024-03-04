import { Component } from '@angular/core';

@Component({
  selector: 'app-minha-lista-de-tarefas',
  templateUrl: './minha-lista-de-tarefas.component.html',
  styleUrls: ['./minha-lista-de-tarefas.component.css']
})
export class MinhaListaDeTarefasComponent {
  public listaDeTarefas: string[] = ["Estudar Angular", "Fazer compras", "Limpar o quarto", "Ler um livro"];
  
  /*O exemplo abaixo tem o mesmo resultado
  public listaDeTarefas2: Array<string> = [];
  */

  /**
   * adicionarItem
   */
  public adicionarItem() {
    this.listaDeTarefas.push("Nova Tarefa Adicionada");
  }

  /**
   * removerItem
index: number   */
  public removerItem(index: number) {
    this.listaDeTarefas.splice(index, 1);
  }



}
