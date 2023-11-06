import { Component, OnInit } from '@angular/core';

import { ArticleModalPage } from '../article-modal/article-modal.page';
import { articleType } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { ArticlesSliderService } from './articles-slider.service';

@Component({
  selector: 'app-articles-slider',
  templateUrl: './articles-slider.page.html',
  styleUrls: ['./articles-slider.page.scss'],
})
export class ArticlesSliderPage implements OnInit{
  articlesCategory: string[] | undefined;
  articles: articleType[] | undefined;

  articlesInChoosenCategory: articleType[] | undefined
  chosenCategory: string | undefined

  isDataLoading =false

  noArticlesOrCategorys = false
  constructor(private modalCtrl: ModalController, private sliderService: ArticlesSliderService) {    
   
  }

  ngOnInit(): void {
    this.getArticles()
    this.getArticlesCategory()
  }
  
  getArticlesCategory(){
   this.sliderService.getarticlesCategory().subscribe(articlesCategorys=>{
     this.articlesCategory = articlesCategorys

     if(this.articlesCategory && this.articlesCategory.length > 0){
      this.chosenCategory = this.articlesCategory[0]
      if(this.articles){
        this.showArticleByCategory()
      }
     }
    
   })
 }

  getArticles(){
    this.sliderService.getArticles().subscribe(articles=>{
      this.articles = articles
      if(this.chosenCategory){

        this.showArticleByCategory()
      }
    })
  }


  slectCategory(e: Event) {
    const { target } = e;

    if (target) {
      this.chosenCategory = (target as HTMLButtonElement).innerText;
      this.showArticleByCategory();
    }
  }
  showArticleByCategory() {
    if(this.articles !==undefined)
    this.articlesInChoosenCategory = this.articles.filter(
      (article) => article.category === this.chosenCategory
    );
    if(this.articlesInChoosenCategory !== undefined)
      if (this.articlesInChoosenCategory.length === 0)
        this.articlesInChoosenCategory = undefined;
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
}
