import { TestBed } from '@angular/core/testing';

import { RecoverApiService } from './recover-api.service';

describe('RecoverApiService', () => {
  let service: RecoverApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoverApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
