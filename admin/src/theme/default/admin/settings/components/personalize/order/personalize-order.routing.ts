/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalizeOrderComponent } from './personalize-order.component';

// Component

const seoRoutes: Routes = [{ path: '', component: PersonalizeOrderComponent }];

@NgModule({
  imports: [RouterModule.forChild(seoRoutes)],
  exports: [RouterModule]
})
export class PersonalizeOrderRouting {}
