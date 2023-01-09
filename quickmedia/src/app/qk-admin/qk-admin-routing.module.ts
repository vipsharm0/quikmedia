import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QkClientcampaignsComponent } from './qk.clientcampaigns/qk.clientcampaigns.component';


const routes: Routes = [
    // {
    //   path: '',
    //   component:QkConversionComponent
    // },
    {
      path: 'managecampaigns',
      component: QkClientcampaignsComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class QkAdminRoutingModule { }