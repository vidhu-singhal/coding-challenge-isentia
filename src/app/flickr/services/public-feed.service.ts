import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

// import { pipe, range, timer, zip } from 'rxjs';
// import { retryWhen, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublicFeedService {

  constructor(public httpClient: HttpClient) { }

  // TODO:vsinghal - Can create a model objects for Flickr feed
  public getPublicFeed(tags: string[], tagmode?: string): Observable<any> {
    let url: string = environment.backendUrl + '/flickr/public';

    // Add tags if only present
    if (tags) {
      url += `?tags=${tags.join(',')}`;

      // Add tagmode only if tags are present
      if (tagmode) {
        url += `&tagmode=${tagmode}`;
      }
    }

    return this.httpClient.get<any>(url);
  }

/* TODO:vsinghal - Apply retry logic based on https://angular.io/guide/practical-observable-usage#exponential-backoff
  public backoff(maxTries, ms) {
    return pipe(
      retryWhen(attempts => {
          return range(1, maxTries)
            .pipe(
              zip(attempts, (i) => i),
              map(i => i * i),
              mergeMap(i => timer(i * ms))
            );
        }
      )
    );
  }
*/
}
