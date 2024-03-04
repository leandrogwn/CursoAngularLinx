import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  contadorObservable: Observable<number> = new Observable<number>;
  contador: number = 0;

  ngOnInit(): void {
    this.contadorObservable = interval(1000);

    this.contadorObservable.subscribe((valor) => {
      this.contador = valor;
    })
  }

}
