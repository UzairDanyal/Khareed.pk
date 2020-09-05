/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalizeProductComponent } from './personalize-product.component';

// Component

const seoRoutes: Routes = [
  { path: '', component: PersonalizeProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(seoRoutes)],
  exports: [RouterModule]
})
export class PersonalizeProductRouting {}
