import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaContainerComponent } from './alta-container.component';

describe('AltaContainerComponent', () => {
  let component: AltaContainerComponent;
  let fixture: ComponentFixture<AltaContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaContainerComponent]
    });
    fixture = TestBed.createComponent(AltaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
