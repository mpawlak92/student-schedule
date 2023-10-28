import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesSliderPage } from './articles-slider.page';

const routes: Routes = [
  {
    path: '',
    component: ArticlesSliderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesSliderPageRoutingModule {}
