import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TipsPage } from './tips.page';
import { TipsPageRoutingModule } from './tips-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipsPageRoutingModule
  ],
  declarations: [TipsPage]
})
export class TipsPageModule {}