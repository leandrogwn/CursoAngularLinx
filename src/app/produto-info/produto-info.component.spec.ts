import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoInfoComponent } from './produto-info.component';

describe('ProdutoInfoComponent', () => {
  let component: ProdutoInfoComponent;
  let fixture: ComponentFixture<ProdutoInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoInfoComponent]
    });
    fixture = TestBed.createComponent(ProdutoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
