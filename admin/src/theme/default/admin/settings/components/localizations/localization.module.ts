/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizationLayoutComponent } from './layout/layout.component';

const Routers: Routes = [
  { path: '', redirectTo: 'countries', pathMatch: 'full' },
  {
    path: '',
    component: LocalizationLayoutComponent,
    children: [
      {
        path: 'stock-status',
        loadChildren: './stockstatus/stockstatus.module#StockStatusModule'
      },
      {
        path: 'order-status',
        loadChildren: './orderstatus/orderstatus.module#OrderStatusModule'
      },
      {
        path: 'countries',
        loadChildren: './countries/countries.module#CountriesModule'
      },
      {
        path: 'zone',
        loadChildren: './zone/zone.module#ZoneModule'
      },
      {
        path: 'emailtemp',
        loadChildren: './emailtemplate/emailtemplate.module#EmailTemplateModule'
      }
    ]
  }
];
@NgModule({
  declarations: [LocalizationLayoutComponent],
  imports: [RouterModule.forChild(Routers)],
  providers: [],
  exports: [RouterModule]
})
export class LocalizationModule {}
