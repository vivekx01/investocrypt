import { TestBed } from '@angular/core/testing';

import { AlternativeapiService } from './alternativeapi.service';

describe('AlternativeapiService', () => {
  let service: AlternativeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlternativeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
