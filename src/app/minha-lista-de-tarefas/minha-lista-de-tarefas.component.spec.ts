import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaListaDeTarefasComponent } from './minha-lista-de-tarefas.component';

describe('MinhaListaDeTarefasComponent', () => {
  let component: MinhaListaDeTarefasComponent;
  let fixture: ComponentFixture<MinhaListaDeTarefasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinhaListaDeTarefasComponent]
    });
    fixture = TestBed.createComponent(MinhaListaDeTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
