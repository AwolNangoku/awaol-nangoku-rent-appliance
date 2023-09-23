import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplianceRoutingModule } from './appliance-routing.module';
import { ApplianceComponent } from './appliance.component';


@NgModule({
  declarations: [
    ApplianceComponent
  ],
  imports: [
    CommonModule,
    ApplianceRoutingModule
  ]
})
export class ApplianceModule { }
