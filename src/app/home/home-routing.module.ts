import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'user-news',
        loadChildren: () => import('../user-news/user-news.module').then(m => m.UserNewsPageModule)
      },
      {
        path: 'schedule',
        loadChildren: () => import('../schedule/schedule.module').then(m => m.SchedulePageModule)
      },
      {
        path: 'marks',
        loadChildren: () => import('../marks/marks.module').then(m => m.MarksPageModule)
      },
      {
        path: 'payments',
        loadChildren: () => import('../payments/payments.module').then(m => m.PaymentsPageModule)
      },
      {
        path: '',
        redirectTo: '/home/user-news',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/user-news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
