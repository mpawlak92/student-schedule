import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticlesSliderPageRoutingModule } from './articles-slider-routing.module';

import { ArticlesSliderPage } from './articles-slider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticlesSliderPageRoutingModule,
  ],
  declarations: [ArticlesSliderPage],
  exports: [ArticlesSliderPage],
})
export class ArticlesSliderPageModule {}
