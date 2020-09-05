/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';

const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
