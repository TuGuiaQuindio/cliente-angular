import { TestBed } from '@angular/core/testing';

import { GuideDataService } from './guide-data.service';

describe('GuideDataService', () => {
  let service: GuideDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuideDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
