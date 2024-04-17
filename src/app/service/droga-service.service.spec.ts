import { TestBed } from '@angular/core/testing';

import { DrogaServiceService } from './droga-service.service';

describe('DrogaServiceService', () => {
  let service: DrogaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrogaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
