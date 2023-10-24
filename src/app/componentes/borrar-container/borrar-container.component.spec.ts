import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarContainerComponent } from './borrar-container.component';

describe('BorrarContainerComponent', () => {
  let component: BorrarContainerComponent;
  let fixture: ComponentFixture<BorrarContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrarContainerComponent]
    });
    fixture = TestBed.createComponent(BorrarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
