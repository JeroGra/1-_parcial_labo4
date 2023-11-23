import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { deActivateGuard } from './de-activate.guard';

describe('deActivateGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => deActivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
