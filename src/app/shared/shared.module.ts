import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TarefaItemComponent } from './tarefa-item/tarefa-item.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TarefaItemComponent
  ],
  exports:[HeaderComponent, TarefaItemComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
