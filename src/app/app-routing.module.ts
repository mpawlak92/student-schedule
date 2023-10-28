import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'news-page',
    loadChildren: () => import('./news-page/news-page.module').then( m => m.NewsPagePageModule)
  },
  {
    path: 'article-modal',
    loadChildren: () => import('./article-modal/article-modal.module').then( m => m.ArticleModalPageModule)
  },
  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
