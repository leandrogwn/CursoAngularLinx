import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { candeactiveteGuard } from './candeactivete.guard';

describe('candeactiveteGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => candeactiveteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
