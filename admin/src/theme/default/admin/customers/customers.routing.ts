/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLayoutComponent } from './components/layout/layout.component';

const customersRoutes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  {
    path: '',
    component: CustomerLayoutComponent,
    children: [
      {
        path: 'customer',
        loadChildren: './components/customer/customer.module#CustomerModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(customersRoutes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}
