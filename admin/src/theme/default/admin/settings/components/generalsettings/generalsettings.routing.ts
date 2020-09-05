/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { GeneralSettingComponent } from './generalsettings/generalsettings.component';

const roleRoutes: Routes = [{ path: '', component: GeneralSettingComponent }];

@NgModule({
  imports: [RouterModule.forChild(roleRoutes)],
  exports: [RouterModule]
})
export class GenaeralSettingsRoutingModule {}
