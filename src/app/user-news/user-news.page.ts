import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../sign-in/auth.service';
import { Subscription } from 'rxjs';
import { UserProfileModalComponent } from './user-profile-modal/user-profile-modal.component';

@Component({
  selector: 'app-user-news',
  templateUrl: './user-news.page.html',
  styleUrls: ['./user-news.page.scss'],
})
export class UserNewsPage implements OnInit,OnDestroy {
  
  isAuthenticated = false 
  private userSub :Subscription | undefined  
  
  constructor( private modalCtrl:ModalController, private authService: AuthService ) {}
  
  ngOnInit(){
    this.userSub = this.authService.user$.subscribe(user=>{
      this.isAuthenticated = !!user;
    });
   
  }
  openUserProfile() {
    this.modalCtrl
      .create({
        component: UserProfileModalComponent,
      })
      .then((modalres) => {
        modalres.present();
      });
  }


  ngOnDestroy(): void {
    if(this.userSub)  this.userSub.unsubscribe()
  }
}
