import { TestBed } from '@angular/core/testing';

import { TratamientoServiceService } from './tratamiento-service.service';

describe('TratamientoServiceService', () => {
  let service: TratamientoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TratamientoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
