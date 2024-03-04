import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tarefa-item',
  templateUrl: './tarefa-item.component.html',
  styleUrls: ['./tarefa-item.component.css']
})
export class TarefaItemComponent {
  @Input() nomeTarefa: string="";
  @Input() concluida: boolean = false;
  @Output() tarefaConcluida: EventEmitter<void> = new EventEmitter<void>();

  public marcarConcluida(){
    this.tarefaConcluida.emit();
  }
}
