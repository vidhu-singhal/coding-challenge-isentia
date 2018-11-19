import {getTestBed, TestBed} from '@angular/core/testing';

import {PublicFeedService} from './public-feed.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../../environments/environment';

fdescribe('PublicFeedService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: PublicFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = injector.get(PublicFeedService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(TestBed.get(PublicFeedService)).toBeTruthy();
  });

  it('should generate correct url when tags not supplied but tagmode specified', () => {
    const testResponse = '{sample: \'data\'}';

    const tags = null;
    const tagmode = 'any';

    service.getPublicFeed(tags, tagmode).subscribe(response => {
      expect(response).toEqual(testResponse);
    });

    const req = httpMock.expectOne(environment.backendUrl + '/flickr/public');
    expect(req.request.method).toBe('GET');
    req.flush(testResponse);
  });

  it('should generate correct url when tags supplied but tagmode not specified', () => {
    const testResponse = '{sample: \'data\'}';

    const tags = ['tag1', 'tag2'];
    const tagmode = null;

    service.getPublicFeed(tags, tagmode).subscribe(response => {
      expect(response).toEqual(testResponse);
    });

    const req = httpMock.expectOne(environment.backendUrl + '/flickr/public?tags=tag1,tag2');
    expect(req.request.method).toBe('GET');
    req.flush(testResponse);
  });

  it('should generate correct url when both tags and tagmode specified', () => {
    const testResponse = '{sample: \'data\'}';

    const tags = ['tag1', 'tag2'];
    const tagmode = 'any';

    service.getPublicFeed(tags, tagmode).subscribe(response => {
      expect(response).toEqual(testResponse);
    });

    const req = httpMock.expectOne(environment.backendUrl + '/flickr/public?tags=tag1,tag2&tagmode=any');
    expect(req.request.method).toBe('GET');
    req.flush(testResponse);
  });
});
