import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassesModalPageRoutingModule } from './classes-modal-routing.module';

import { ClassesModalPage } from './classes-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassesModalPageRoutingModule
  ],
  declarations: [ClassesModalPage]
})
export class ClassesModalPageModule {}
