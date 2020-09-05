/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { CountriesAddComponent } from './add/add.component';
import { CountriesListComponent } from './list/list.component';

const userRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CountriesListComponent },
  { path: 'add', component: CountriesAddComponent },
  {
    path: 'edit/:id',
    component: CountriesAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule {}
