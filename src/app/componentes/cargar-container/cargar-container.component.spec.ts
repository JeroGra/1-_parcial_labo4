import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarContainerComponent } from './cargar-container.component';

describe('CargarContainerComponent', () => {
  let component: CargarContainerComponent;
  let fixture: ComponentFixture<CargarContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargarContainerComponent]
    });
    fixture = TestBed.createComponent(CargarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
