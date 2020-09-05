/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { UserAddComponent } from './add/add.component';
import { UserListComponent } from './list/list.component';

const userRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: UserListComponent },
  { path: 'add', component: UserAddComponent },
  {
    path: 'edit/:id',
    component: UserAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
