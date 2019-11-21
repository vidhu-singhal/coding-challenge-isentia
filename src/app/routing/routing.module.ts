import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QaChecklistComponent } from '../guidelines/components/qa-checklist/qa-checklist.component';

const routes: Routes = [
  { path: '', component: QaChecklistComponent, canActivate: [], canDeactivate: [], data: { page: 'home'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
