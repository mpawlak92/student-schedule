import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from '../../data.json';
import { articleType } from '../helpers/interfaces';
import { ModalController } from '@ionic/angular';
import { EditProfileModalComponent } from './edit-profile-modal/edit-profile-modal.component';
import { StudentCardModalComponent } from './student-card-modal/student-card-modal.component';
import { AuthService } from '../sign-in/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-news',
  templateUrl: './user-news.page.html',
  styleUrls: ['./user-news.page.scss'],
})
export class UserNewsPage implements OnInit,OnDestroy {
  newsData: articleType[] = data.news;

  isAuthenticated = false 
  private userSub :Subscription | undefined  
  
  constructor(private router: Router, private modalCtrl:ModalController, private authService: AuthService ) {}
  
  ngOnInit(){
    this.userSub = this.authService.user$.subscribe(user=>{
      this.isAuthenticated = !!user;
      
    });
   
  }

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
    this.setOpen(false)

    setTimeout(()=>{
      this.authService.logout()
      this.router.navigate(['/start/sign-in'])
  },1)
    
    
    
  }
  ngOnDestroy(): void {
    if(this.userSub)  this.userSub.unsubscribe()
  }
}
