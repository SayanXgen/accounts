import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesBillPageRoutingModule } from './sales-bill-routing.module';

import { SalesBillPage } from './sales-bill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesBillPageRoutingModule
  ],
  declarations: [SalesBillPage]
})
export class SalesBillPageModule {}
