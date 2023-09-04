import { TestBed } from '@angular/core/testing';

import { TrendingGifsService } from './trending-gifs.service';

describe('TrendingGifsService', () => {
  let service: TrendingGifsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendingGifsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
