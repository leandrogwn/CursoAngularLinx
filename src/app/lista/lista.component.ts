import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  template: `
  <h2>{{ titulo }} </h2>
  <ul>
    <li *ngFor="let item of itens">
      <ng-container *ngTemplateOutlet="itemTemplate; context:{ $implicit: item}"></ng-container>
    </li>
  </ul>
  <br>
  <ng-content></ng-content>
  `
})

export class ListaComponent {
  @Input() public titulo: string = "";
  @Input() public itens: any[] = [];
  @Input() public itemTemplate: any = [];
}
