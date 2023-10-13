import { TestBed } from '@angular/core/testing';

import { PlavaService } from './models/plava.service';

describe('PlavaService', () => {
  let service: PlavaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlavaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
