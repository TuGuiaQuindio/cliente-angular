import { TestBed } from '@angular/core/testing';

import { ModuleSolverService } from './module-solver.service';

describe('ModuleSolverService', () => {
  let service: ModuleSolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleSolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
