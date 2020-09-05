/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CMSLayoutComponent } from './components/layout/layout.component';

const cmsRoutes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  {
    path: '',
    component: CMSLayoutComponent,
    children: [
      // ---
      {
        path: 'banners',
        loadChildren: './components/banner/banner.module#BannerModule'
      },
      {
        path: 'pages',
        loadChildren: './components/pages/pages.module#PagesModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(cmsRoutes)],
  exports: [RouterModule]
})
export class CMSRoutingModule {}
