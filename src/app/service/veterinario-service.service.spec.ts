import { TestBed } from '@angular/core/testing';

import { VeterinarioServiceService } from './veterinario-service.service';

describe('VeterinarioServiceService', () => {
  let service: VeterinarioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeterinarioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
