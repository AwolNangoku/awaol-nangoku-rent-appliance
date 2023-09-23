import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplianceManagementRoutingModule } from './appliance-management-routing.module';
import { ApplianceManagementComponent } from './appliance-management.component';


@NgModule({
  declarations: [
    ApplianceManagementComponent
  ],
  imports: [
    CommonModule,
    ApplianceManagementRoutingModule
  ]
})
export class ApplianceManagementModule { }
