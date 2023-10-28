import { Component } from '@angular/core';
import { Router } from '@angular/router';
import data from '../../data.json';
import { articleType } from '../helpers/interfaces';

@Component({
  selector: 'app-user-news',
  templateUrl: './user-news.page.html',
  styleUrls: ['./user-news.page.scss'],
})
export class UserNewsPage  {
  newsData: articleType[] = data.news;
  constructor(public router: Router) {}

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  logout() {
    location.replace('/');
  }
}
