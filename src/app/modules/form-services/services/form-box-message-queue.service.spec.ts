import { TestBed } from '@angular/core/testing';

import { FormBoxMessageQueueService } from './form-box-message-queue.service';

describe('FormBoxMessageQueueService', () => {
  let service: FormBoxMessageQueueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormBoxMessageQueueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
