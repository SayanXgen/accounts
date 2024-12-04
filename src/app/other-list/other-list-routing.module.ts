import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherListPage } from './other-list.page';

const routes: Routes = [
  {
    path: '',
    component: OtherListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherListPageRoutingModule {}
