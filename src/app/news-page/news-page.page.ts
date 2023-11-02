import { Component } from '@angular/core';

import { articleType } from '../helpers/interfaces';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.page.html',
  styleUrls: ['./news-page.page.scss'],
})
export class NewsPagePage {

    newsData: articleType[] | undefined;

  constructor(private newsService: NewsService) { 

    
      this.getNews()
    

  }

  getNews()
  {
    this.newsService.getAllNews().subscribe(
      (result) => {
        this.newsData = result
      }
    );
  }

  

}
