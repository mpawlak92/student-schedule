import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss'],
})
export class MessageModalComponent  implements OnInit {
  lecturer:any | undefined
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) {
    this.lecturer = this.navParams.data;
  }

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }

}
