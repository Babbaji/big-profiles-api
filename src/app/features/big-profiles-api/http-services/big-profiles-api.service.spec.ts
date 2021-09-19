import { TestBed } from '@angular/core/testing';

import { BigProfilesApiService } from './big-profiles-api.service';

describe('BigProfilesApiService', () => {
  let service: BigProfilesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigProfilesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
