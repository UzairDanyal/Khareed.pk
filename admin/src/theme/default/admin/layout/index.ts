/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLayoutComponent } from './auth/auth.component';
import { CommonLayoutComponent } from './common/common.component';
import { LayoutSandbox } from '../../../../core/admin/layout/layout.sandbox';

import { ComponentsModule } from '../shared/components';
import { LayoutEffect } from '../../../../core/admin/layout/effects/layout.effects';
import { EffectsModule } from '@ngrx/effects';
import { LayoutsService } from '../../../../core/admin/layout/layout.service';

export const CONTAINERS = {
  AuthLayoutComponent,
  CommonLayoutComponent
};

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    EffectsModule.forFeature([LayoutEffect])
  ],
  providers: [LayoutSandbox, LayoutsService]
})
export class ContainersModule {}
