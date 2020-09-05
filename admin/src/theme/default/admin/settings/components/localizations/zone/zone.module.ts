/*
 * khareed.pk
 
 * uzair usama
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultCommonModule } from '../../../../../default.common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { ZoneAddComponent } from './add/add.component';
import { ZoneListComponent } from './list/list.component';

// Routing Module
import { ZoneRoutingModule } from './zone.routing';

// Shared Module
import { MaterialModule } from '../../../../../default.material.module';

@NgModule({
  declarations: [ZoneAddComponent, ZoneListComponent],
  imports: [
    CommonModule,
    DefaultCommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ZoneRoutingModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: []
})
export class ZoneModule {}
