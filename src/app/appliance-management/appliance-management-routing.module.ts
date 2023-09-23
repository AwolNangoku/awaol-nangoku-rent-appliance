import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplianceManagementComponent } from './appliance-management.component';

const routes: Routes = [{ path: '', component: ApplianceManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplianceManagementRoutingModule { }
