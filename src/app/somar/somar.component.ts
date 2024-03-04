import { Component } from '@angular/core';

@Component({
  selector: 'app-somar',
  templateUrl: './somar.component.html',
  styleUrls: ['./somar.component.css']
})
export class SomarComponent {
  public somar(a: number, b: number){
    return a+b;
  }
}
