import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassesModalPage } from './classes-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ClassesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassesModalPageRoutingModule {}
