import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { canactivatechildGuard } from './canactivatechild.guard';

describe('canactivatechildGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canactivatechildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
