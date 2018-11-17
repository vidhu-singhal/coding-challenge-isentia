import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicFeedComponent} from '../flickr/components/flickr/public-feed/public-feed.component';

const routes: Routes = [
  { path: '', component: PublicFeedComponent, canActivate: [], canDeactivate: [], data: { page: 'flickr-public-feed'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
