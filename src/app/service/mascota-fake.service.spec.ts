import { TestBed } from '@angular/core/testing';

import { MascotaFakeService } from './mascota-fake.service';

describe('MascotaFakeService', () => {
  let service: MascotaFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MascotaFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
