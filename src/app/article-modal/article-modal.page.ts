import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-article-modal',
  templateUrl: './article-modal.page.html',
  styleUrls: ['./article-modal.page.scss'],
})
export class ArticleModalPage {
article: any = {};

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) {
    this.article = this.navParams.data;
  }
  
close() {
    this.modalCtrl.dismiss();
  }
}
