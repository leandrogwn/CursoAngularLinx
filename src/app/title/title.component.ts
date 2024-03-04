import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnChanges, OnDestroy {
  ngOnDestroy(): void {
    console.log('Componente destruído');
    
    }
  
  @Input() public title:string = "Curso Angular Linx";
  
  ngOnChanges(): void {
    console.log('Valor alterado');
    
  }

}
