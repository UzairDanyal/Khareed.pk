/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { SeoComponent } from './seo.component';

const seoRoutes: Routes = [{ path: '', component: SeoComponent }];

@NgModule({
  imports: [RouterModule.forChild(seoRoutes)],
  exports: [RouterModule]
})
export class SeoRouting {}
