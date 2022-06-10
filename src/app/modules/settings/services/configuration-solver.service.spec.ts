import { TestBed } from '@angular/core/testing';

import { ConfigurationSolverService } from './configuration-solver.service';

describe('ConfigurationSolverService', () => {
  let service: ConfigurationSolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigurationSolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
