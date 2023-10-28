import { Component,  Input } from '@angular/core';
import { articleType } from '../helpers/interfaces';

import { ModalController } from '@ionic/angular';
import { ArticleModalPage } from '../article-modal/article-modal.page';


@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.page.html',
  styleUrls: ['./news-card.page.scss'],
})
export class NewsCardPage {
  @Input('element') news!: articleType;

  constructor(private modalCtrl: ModalController) {}

  openArticle(articleData: articleType) {
    this.modalCtrl
      .create({
        component: ArticleModalPage,
        componentProps: <articleType>articleData,
      })
      .then((modalres) => {
        modalres.present();
      });
  }
}
