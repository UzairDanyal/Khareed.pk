/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AdminModule } from './admin.module';
@NgModule({})
export class AdminSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AdminModule,
      providers: []
    };
  }
}
