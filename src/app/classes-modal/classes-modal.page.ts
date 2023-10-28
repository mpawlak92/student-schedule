import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-classes-modal',
  templateUrl: './classes-modal.page.html',
  styleUrls: ['./classes-modal.page.scss'],
})
export class ClassesModalPage implements OnInit {
  classes: any;
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) {
    this.classes = this.navParams.data;
  }

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }
}
