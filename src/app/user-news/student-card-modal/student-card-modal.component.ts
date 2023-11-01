import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-student-card-modal',
  templateUrl: './student-card-modal.component.html',
  styleUrls: ['./student-card-modal.component.scss'],
})
export class StudentCardModalComponent  implements OnInit {
  studentCardId:any 
  constructor(private modalCtrl: ModalController,private navParams: NavParams) {
    this.studentCardId = this.navParams.data
  }

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }

}
