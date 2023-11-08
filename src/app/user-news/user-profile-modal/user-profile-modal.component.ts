import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AuthService } from 'src/app/sign-in/auth.service';
import { EditProfileModalComponent } from '../edit-profile-modal/edit-profile-modal.component';
import { StudentCardModalComponent } from '../student-card-modal/student-card-modal.component';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { userType } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-user-profile-modal',
  templateUrl: './user-profile-modal.component.html',
  styleUrls: ['./user-profile-modal.component.scss'],
})
export class UserProfileModalComponent  implements OnInit, OnDestroy {
  
  userSub:Subscription | undefined
  userId: string =''
  userData: userType | undefined

  constructor(private modalCtrl: ModalController, private authService:AuthService, private userService:UserService) {  
  }


 ngOnInit(){
    this.userSub =this.authService.user$.subscribe(user=>{
      if(user)
      this.userId = user.id 
    });

    this.getUsers(this.userId)
  }

  getUsers(id: string){
    let data
     this.userService.getAllUsers().subscribe(result =>{
      
      data = result.filter(user=>{ return user.id === id})
      if(data.length>0){
        this.userData = data[0]
      }
     })    

  }
  openEditProfileModal() {
    this.modalCtrl
      .create({
        component: EditProfileModalComponent,
      })
      .then((modalres) => {
        modalres.present();
      });
  }
  
  openStudentCardModal() {
    this.modalCtrl
      .create({
        component: StudentCardModalComponent,
      })
      .then((modalres) => {
        modalres.present();
      });
  }
  
  logout() {
    this.authService.logout()
    this.close()    
  }
    
  close() {
    this.modalCtrl.dismiss();
  }

ngOnDestroy(): void {
    if(this.userSub)  this.userSub.unsubscribe()
  }
}
