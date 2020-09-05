/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { BannerAddComponent } from './add/add.component';
import { BannerListComponent } from './list/list.component';

const bannerRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: BannerListComponent },
  { path: 'add', component: BannerAddComponent },
  {
    path: 'edit/:id',
    component: BannerAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(bannerRoutes)],
  exports: [RouterModule]
})
export class BannerRoutingModule {}
