import { TestBed } from '@angular/core/testing';

import { PublicFeedService } from './public-feed.service';

describe('PublicFeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublicFeedService = TestBed.get(PublicFeedService);
    expect(service).toBeTruthy();
  });
});
