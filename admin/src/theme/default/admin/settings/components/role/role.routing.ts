/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { RoleAddComponent } from './add/add.component';
import { RoleListComponent } from './list/list.component';

const roleRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: RoleListComponent },
  { path: 'add', component: RoleAddComponent },
  {
    path: 'edit/:id',
    component: RoleAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(roleRoutes)],
  exports: [RouterModule]
})
export class RoleRoutingModule {}
