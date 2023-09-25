import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceOfferingsComponent } from './service-offerings.component';

const routes: Routes = [{ path: '', component: ServiceOfferingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceOfferingsRoutingModule { }
