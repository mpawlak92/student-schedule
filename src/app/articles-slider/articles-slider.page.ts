import { Component } from '@angular/core';
import data from '../../data.json';
import { ArticleModalPage } from '../article-modal/article-modal.page';
import { articleType } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-articles-slider',
  templateUrl: './articles-slider.page.html',
  styleUrls: ['./articles-slider.page.scss'],
})
export class ArticlesSliderPage {
  articlesCategory: string[] = data.articlesCategory;
  articles: articleType[] = data.articles;

  articlesInChoosenCategory: articleType[] | null;
  chosenCategory: string;
  constructor(private modalCtrl: ModalController) {
    this.chosenCategory = this.articlesCategory[0];

    this.articlesInChoosenCategory = this.articles.filter(
      (article) => this.chosenCategory
    );
    if (this.articlesInChoosenCategory.length === 0)
      this.articlesInChoosenCategory = null;
  }

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

  slectCategory(e: Event) {
    const { target } = e;

    if (target) {
      this.chosenCategory = (target as HTMLButtonElement).innerText;
      this.showArticleByCategory();
    }
  }
  showArticleByCategory() {
    this.articlesInChoosenCategory = this.articles.filter(
      (article) => article.category === this.chosenCategory
    );
    if (this.articlesInChoosenCategory.length === 0)
      this.articlesInChoosenCategory = null;
  }
}
