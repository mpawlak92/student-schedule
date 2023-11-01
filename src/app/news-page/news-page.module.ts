import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPagePageRoutingModule } from './news-page-routing.module';

import { NewsPagePage } from './news-page.page';
import { NewsCardPageModule } from '../news-card/news-card.module';
import { ArticlesSliderPageModule } from '../articles-slider/articles-slider.module';
import { NewsService } from './news.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsPagePageRoutingModule,
    NewsCardPageModule,
    ArticlesSliderPageModule
  ],
  declarations: [NewsPagePage,],
  providers:[NewsService],
  exports: [NewsPagePage,]
})
export class NewsPagePageModule {}
