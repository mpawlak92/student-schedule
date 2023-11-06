import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './sign-in/auth-guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'news-page',
    loadChildren: () => import('./news-page/news-page.module').then( m => m.NewsPagePageModule)
  },
  {
    path: 'article-modal',
    loadChildren: () => import('./article-modal/article-modal.module').then( m => m.ArticleModalPageModule)
  },
  {
    path: 'classes-modal',
    loadChildren: () => import('./classes-modal/classes-modal.module').then( m => m.ClassesModalPageModule)
  },
  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
