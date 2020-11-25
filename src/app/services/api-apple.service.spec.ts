import { TestBed } from '@angular/core/testing';

import { ApiAppleService } from './api-apple.service';

describe('ApiAppleService', () => {
  let service: ApiAppleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAppleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
