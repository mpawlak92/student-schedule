import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.scss'],
})
export class EditProfileModalComponent  implements OnInit {
  userData:any | undefined
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) {
    this.userData = this.navParams.data;
  }

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }


}
