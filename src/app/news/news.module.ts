import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPageRoutingModule } from './news-routing.module';

import { NewsPage } from './news.page';
import { NewsPagePage } from '../news-page/news-page.page';
import { NewsPagePageModule } from '../news-page/news-page.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsPageRoutingModule,
    NewsPagePageModule
  ],
  declarations: [NewsPage]
})
export class NewsPageModule {}
