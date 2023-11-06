import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { classesType } from '../interfaces/interfaces';
import { ClassesModalPage } from '../classes-modal/classes-modal.page';
@Component({
  selector: 'app-classes-item',
  templateUrl: './classes-item.component.html',
  styleUrls: ['./classes-item.component.scss'],
})
export class ClassesItemComponent implements OnInit {
  @Input() classes: any | classesType;
  constructor(private modalCtrl: ModalController) {}

  openDetails(classesData: classesType) {
    this.modalCtrl
      .create({
        component: ClassesModalPage,
        componentProps: <classesType>classesData,
      })
      .then((modalres) => {
        modalres.present();
      });
  }

  ngOnInit() {}
}
