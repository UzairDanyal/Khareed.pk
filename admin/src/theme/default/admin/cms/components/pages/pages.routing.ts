/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { PagesAddComponent } from './add/add.component';
import { PageListComponent } from './list/list.component';

const pagesRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: PageListComponent },
  { path: 'add', component: PagesAddComponent },
  {
    path: 'edit/:id',
    component: PagesAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
