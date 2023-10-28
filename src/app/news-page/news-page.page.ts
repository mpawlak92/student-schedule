import { Component } from '@angular/core';
import { articleType } from '../helpers/interfaces';
import data from '../../data.json';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.page.html',
  styleUrls: ['./news-page.page.scss'],
})
export class NewsPagePage {
    newsData: articleType[] = data.news;
  constructor() { }

  

}
