import { TestBed } from '@angular/core/testing';

import { FormMessageResolverService } from './form-message-resolver.service';

describe('FormMsgResolverService', () => {
  let service: FormMessageResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormMessageResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
