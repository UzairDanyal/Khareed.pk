/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Component
import { SettingsLayoutComponent } from './components/layout/layout.component';

const settingsRoutes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  {
    path: '',
    component: SettingsLayoutComponent,
    children: [
      {
        path: 'user',
        loadChildren: './components/user/user.module#UserModule'
      },
      {
        path: 'role',
        loadChildren: './components/role/role.module#RoleModule'
      },

      {
        path: 'generalsetting',
        loadChildren:
          './components/generalsettings/generalsettings.module#GeneralSettingsModule'
      },
      {
        path: 'sidesettings',
        loadChildren:
          './components/sitesettings/sitesettings.module#SiteSettingsModule'
      },
      {
        path: 'personalize',
        loadChildren:
          './components/personalize/personalize.module#PersonalizeModule'
      },
      {
        path: 'local',
        loadChildren:
          './components/localizations/localization.module#LocalizationModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(settingsRoutes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
