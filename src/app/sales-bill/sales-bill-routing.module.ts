import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesBillPage } from './sales-bill.page';

const routes: Routes = [
  {
    path: '',
    component: SalesBillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesBillPageRoutingModule {}
