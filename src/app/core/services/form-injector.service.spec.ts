import { TestBed } from '@angular/core/testing';

import { FormInjectorService } from './form-injector.service';

describe('FormInjectorService', () => {
  let service: FormInjectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormInjectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
