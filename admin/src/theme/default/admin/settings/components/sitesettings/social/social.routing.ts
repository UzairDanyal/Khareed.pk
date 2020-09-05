/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialComponent } from './social.components';

// Component

const socialRoutes: Routes = [{ path: '', component: SocialComponent }];

@NgModule({
  imports: [RouterModule.forChild(socialRoutes)],
  exports: [RouterModule]
})
export class SocialRouting {}
