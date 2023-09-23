import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplianceComponent } from './appliance.component';

const routes: Routes = [{ path: '', component: ApplianceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplianceRoutingModule { }
