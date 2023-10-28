import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserNewsPageRoutingModule } from './user-news-routing.module';

import { UserNewsPage } from './user-news.page';
import { NewsPagePageModule } from '../news-page/news-page.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserNewsPageRoutingModule,
    NewsPagePageModule
  ],
  declarations: [UserNewsPage]
})
export class UserNewsPageModule {}
