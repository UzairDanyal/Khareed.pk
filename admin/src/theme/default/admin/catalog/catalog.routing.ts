/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Component
import { CatalogLayoutComponent } from './components/layout/layout.component';

const catalogRoutes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  {
    path: '',
    component: CatalogLayoutComponent,
    children: [
      {
        path: 'product',
        loadChildren: './components/product/product.module#ProductModule'
      },
      {
        path: 'categories',
        loadChildren:
          './components/categories/categories.module#CategoriesModule'
      },
      {
        path: 'brand',
        loadChildren: './components/brand/brand.module#BrandModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(catalogRoutes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule {}
