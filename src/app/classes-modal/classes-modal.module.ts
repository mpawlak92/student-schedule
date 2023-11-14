import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassesModalPageRoutingModule } from './classes-modal-routing.module';

import { ClassesModalPage } from './classes-modal.page';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { ClassEvaluationModalComponent } from './class-evaluation-modal/class-evaluation-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassesModalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ClassesModalPage, MessageModalComponent,ClassEvaluationModalComponent]
})
export class ClassesModalPageModule {}
