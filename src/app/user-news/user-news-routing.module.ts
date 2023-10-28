import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserNewsPage } from './user-news.page';

const routes: Routes = [
  {
    path: '',
    component: UserNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserNewsPageRoutingModule {}
