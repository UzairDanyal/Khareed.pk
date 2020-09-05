/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesLayoutComponent } from './components/layout/layout.component';

const salesRoutes: Routes = [
  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  {
    path: '',
    component: SalesLayoutComponent,
    children: [
      {
        path: 'orders',
        loadChildren: './components/orders/orders.module#OrdersModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(salesRoutes)],
  exports: [RouterModule]
})
export class SalesRoutingModule {}
