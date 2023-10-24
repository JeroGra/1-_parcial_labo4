import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmContainerComponent } from './abm-container.component';

describe('AbmContainerComponent', () => {
  let component: AbmContainerComponent;
  let fixture: ComponentFixture<AbmContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbmContainerComponent]
    });
    fixture = TestBed.createComponent(AbmContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
