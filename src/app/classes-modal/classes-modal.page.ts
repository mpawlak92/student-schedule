import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { classesType } from '../interfaces/interfaces';
import { ClassEvaluationModalComponent } from './class-evaluation-modal/class-evaluation-modal.component';

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

  openMessageModal(lecturer:{lecturerName:string}) {
    this.modalCtrl
      .create({
        component: MessageModalComponent,
        componentProps:lecturer,
      })
      .then((modalres) => {
        modalres.present();
      });
  }
  openClassElevationModal(classes:classesType) {
    this.modalCtrl
      .create({
        component: ClassEvaluationModalComponent,
        componentProps:classes,
      })
      .then((modalres) => {
        modalres.present();
      });
  }
}
