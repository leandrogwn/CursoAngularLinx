import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomarComponent } from './somar.component';

describe('SomarComponent', () => {
  let component: SomarComponent;
  let fixture: ComponentFixture<SomarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SomarComponent]
    });
    fixture = TestBed.createComponent(SomarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve somar dois numeros positivos corretamente', function(){
    const resultado = component.somar(2,3);
    expect(resultado).toBe(5);
  })

  it('deve somar um numero positivo a um numero negativo corretamente', function(){
    const resultado = component.somar(2,-3);
    expect(resultado).toBe(-1);
  })

  it('deve somar um numero com zero corretamente', function(){
    const resultado = component.somar(2,0);
    expect(resultado).toBe(2);
  })
  
});
