import { Component } from '@angular/core';
import { Router } from '@angular/router';
import data from '../../data.json';
import { articleType } from '../helpers/interfaces';
import { ModalController } from '@ionic/angular';
import { EditProfileModalComponent } from './edit-profile-modal/edit-profile-modal.component';
import { StudentCardModalComponent } from './student-card-modal/student-card-modal.component';

@Component({
  selector: 'app-user-news',
  templateUrl: './user-news.page.html',
  styleUrls: ['./user-news.page.scss'],
})
export class UserNewsPage  {
  newsData: articleType[] = data.news;
 
  constructor(private router: Router, private modalCtrl:ModalController) {}

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  openEditProfileModal(userData:{}) {
    this.modalCtrl
      .create({
        component: EditProfileModalComponent,
        componentProps:userData,
      })
      .then((modalres) => {
        modalres.present();
      });
  }
  openStudentCardModal(studentCardId:{id:number}) {
    this.modalCtrl
      .create({
        component: StudentCardModalComponent,
        componentProps:studentCardId,
      })
      .then((modalres) => {
        modalres.present();
      });
  }
  logout() {
    location.replace('/');
  }
}
