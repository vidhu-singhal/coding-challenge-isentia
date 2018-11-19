import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicFeedComponent} from '../flickr/components/public-feed/public-feed.component';

const routes: Routes = [
  { path: '', component: PublicFeedComponent, canActivate: [], canDeactivate: [], data: { page: 'flickr-public-feedItems'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
