import { TestBed } from '@angular/core/testing';

import { GoToDashboardGuard } from './go-to-dashboard.guard';

describe('GoToDashboardGuard', () => {
  let guard: GoToDashboardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GoToDashboardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
