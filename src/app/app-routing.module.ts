import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'appliances', loadChildren: () => import('./appliances/appliances.module').then(m => m.AppliancesModule) },
  { path: 'appliance', loadChildren: () => import('./appliance/appliance.module').then(m => m.ApplianceModule) },
  { path: 'appliance-management', loadChildren: () => import('./appliance-management/appliance-management.module').then(m => m.ApplianceManagementModule) },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'service-offerings', loadChildren: () => import('./service-offerings/service-offerings.module').then(m => m.ServiceOfferingsModule) },
  { path: 'login', loadChildren: () => import('./login/login-routing.module').then(m => m.LoginRoutingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
