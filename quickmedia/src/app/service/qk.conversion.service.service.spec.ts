import { TestBed } from '@angular/core/testing';

import { QkConversionServiceService } from './qk.conversion.service';

describe('QkConversionServiceService', () => {
  let service: QkConversionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QkConversionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
