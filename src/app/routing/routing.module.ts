import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicFeedComponent} from '../flickr/components/public-feed/public-feed.component';
import {CoffeeBuddyComponent} from '../coffee-buddy-component/coffee-buddy.component';

const routes: Routes = [
  { path: 'flickr', component: PublicFeedComponent, canActivate: [], canDeactivate: [], data: { page: 'flickr-public-feedItems'}},
  { path: 'coffee-buddy', component: CoffeeBuddyComponent, canActivate: [], canDeactivate: [], data: { page: 'coffee-buddy'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
