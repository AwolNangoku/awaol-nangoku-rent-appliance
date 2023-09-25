import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceOfferingsRoutingModule } from './service-offerings-routing.module';
import { ServiceOfferingsComponent } from './service-offerings.component';


@NgModule({
  declarations: [
    ServiceOfferingsComponent
  ],
  imports: [
    CommonModule,
    ServiceOfferingsRoutingModule
  ]
})
export class ServiceOfferingsModule { }
