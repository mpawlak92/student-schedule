import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsCardPage } from './news-card.page';

const routes: Routes = [
  {
    path: '',
    component: NewsCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsCardPageRoutingModule {}
