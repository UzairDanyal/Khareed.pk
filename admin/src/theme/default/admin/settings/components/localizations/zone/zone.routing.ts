/*
 * khareed.pk
 
 * uzair usama
 */
import {NgModule} from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

// Component
import {ZoneAddComponent} from './add/add.component';
import {ZoneListComponent} from './list/list.component';

const zoneRoutes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: ZoneListComponent},
    {path: 'add', component: ZoneAddComponent},
    {
        path: 'edit/:id',
        component: ZoneAddComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(zoneRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ZoneRoutingModule {
}
