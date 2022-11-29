import { TestBed } from '@angular/core/testing';

import { QkLoginService } from './qk.login.service';

describe('QkLoginService', () => {
  let service: QkLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QkLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
