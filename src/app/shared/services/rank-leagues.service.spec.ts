import { TestBed } from '@angular/core/testing';

import { RankLeaguesService } from './rank-leagues.service';

describe('RankLeaguesService', () => {
  let service: RankLeaguesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankLeaguesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
