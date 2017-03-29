import { TestBed, inject } from '@angular/core/testing';

import { SpotifySearchService } from './spotify-search.service';

describe('SpotifySearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifySearchService]
    });
  });

  it('should ...', inject([SpotifySearchService], (service: SpotifySearchService) => {
    expect(service).toBeTruthy();
  }));
});
