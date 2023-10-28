import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsCardPageRoutingModule } from './news-card-routing.module';

import { NewsCardPage } from './news-card.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, NewsCardPageRoutingModule],
  declarations: [NewsCardPage],
  exports: [NewsCardPage],
})
export class NewsCardPageModule {}
