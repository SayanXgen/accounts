import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherListPageRoutingModule } from './other-list-routing.module';

import { OtherListPage } from './other-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherListPageRoutingModule
  ],
  declarations: [OtherListPage]
})
export class OtherListPageModule {}
