import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaItemComponent } from './tarefa-item.component';

describe('TarefaItemComponent', () => {
  let component: TarefaItemComponent;
  let fixture: ComponentFixture<TarefaItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarefaItemComponent]
    });
    fixture = TestBed.createComponent(TarefaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
