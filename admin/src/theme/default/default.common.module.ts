/*
 * khareed.pk
 * uzair usama
 
 */
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [NgbModule, SelectDropDownModule, NgxChartsModule],
  exports: [NgbModule, SelectDropDownModule, NgxChartsModule],
  providers: []
})
export class DefaultCommonModule {}
