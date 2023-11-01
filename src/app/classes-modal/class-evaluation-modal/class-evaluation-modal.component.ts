import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-class-evaluation-modal',
  templateUrl: './class-evaluation-modal.component.html',
  styleUrls: ['./class-evaluation-modal.component.scss'],
})
export class ClassEvaluationModalComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }
}
