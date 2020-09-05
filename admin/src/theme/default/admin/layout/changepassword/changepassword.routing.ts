/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './changepassword.component';

const changePasswordRoutes: Routes = [
  {
    path: '',
    component: ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(changePasswordRoutes)],
  exports: [RouterModule]
})
export class ChangePasswordRouting {}
