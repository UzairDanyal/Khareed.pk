/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DefaultCommonModule } from '../../../default.common.module';

// custom directive component
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileBarComponent } from './profile-bar/profile.bar.component';
import { MaterialModule } from '../../../default.material.module';
import { RatingComponent } from './rating/rating.component';

export const COMPONENTS = [
  NavigationComponent,
  ProfileBarComponent,
  RatingComponent
];

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DefaultCommonModule,
    MaterialModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  entryComponents: [],
  providers: []
})
export class ComponentsModule {}
