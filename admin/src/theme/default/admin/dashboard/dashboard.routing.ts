/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
