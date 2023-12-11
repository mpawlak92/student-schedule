import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserNewsPageRoutingModule } from './user-news-routing.module';

import { UserNewsPage } from './user-news.page';
import { NewsPagePageModule } from '../news-page/news-page.module';
import { StudentCardModalComponent } from './student-card-modal/student-card-modal.component';
import { EditProfileModalComponent } from './edit-profile-modal/edit-profile-modal.component';
import { UserProfileModalComponent } from './user-profile-modal/user-profile-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserNewsPageRoutingModule,
    NewsPagePageModule,
    ReactiveFormsModule
  ],
  declarations: [UserNewsPage, StudentCardModalComponent,EditProfileModalComponent, UserProfileModalComponent]
})
export class UserNewsPageModule {}
