/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalizeLayoutComponent } from './layout/layout.component';

const Routers: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  {
    path: '',
    component: PersonalizeLayoutComponent,
    children: [
      {
        path: 'product',
        loadChildren:
          './product/personalize-product.module#PersonalizeProductModule'
      },
      {
        path: 'order',
        loadChildren: './order/personalize-order.module#PersonalizeOrderModule'
      }
    ]
  }
];
@NgModule({
  declarations: [PersonalizeLayoutComponent],
  imports: [RouterModule.forChild(Routers)],
  providers: [],
  exports: [RouterModule]
})
export class PersonalizeModule {}
