import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoListadoPublicoComponent } from './producto-listado-publico.component';

describe('ProductoListadoPublicoComponent', () => {
  let component: ProductoListadoPublicoComponent;
  let fixture: ComponentFixture<ProductoListadoPublicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoListadoPublicoComponent]
    });
    fixture = TestBed.createComponent(ProductoListadoPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
