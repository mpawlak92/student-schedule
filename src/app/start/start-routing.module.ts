import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartPage } from './start.page';

const routes: Routes = [
  {
    path: 'start',
    component: StartPage,
    children: [
      {
        path: 'news',
        loadChildren: () => import('../news/news.module').then(m => m.NewsPageModule)
      },
      {
        path: 'sign-in',
        loadChildren: () => import('../sign-in/sign-in.module').then(m => m.SignInPageModule)
      },
      {
        path: '',
        redirectTo: '/start/news',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/start/news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartPageRoutingModule {}
