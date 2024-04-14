import { TestBed } from '@angular/core/testing';

import { MatchsServiceService } from './matchs-service.service';

describe('MatchsServiceService', () => {
  let service: MatchsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
