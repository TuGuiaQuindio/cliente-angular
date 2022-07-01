import { TestBed } from '@angular/core/testing';

import { LinkSolverService } from './link-solver-service.service';

describe('LinkSolverService', () => {
  let service: LinkSolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkSolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
