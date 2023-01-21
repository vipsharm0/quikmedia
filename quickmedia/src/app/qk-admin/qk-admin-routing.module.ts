import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QkClientcampaignsComponent } from './qk.clientcampaigns/qk.clientcampaigns.component';
import { QkConversionlogsComponent } from './qk.conversionlogs/qk.conversionlogs.component';
import { QkLocalconversionComponent } from './qk.localconversion/qk.localconversion.component';


const routes: Routes = [
    // {
    //   path: '',
    //   component:QkConversionComponent
    // },
    {
      path: 'managecampaigns',
      component: QkClientcampaignsComponent
    },
    {
        path: 'conversion-log',
        component: QkConversionlogsComponent
    },
    {
        path: 'localconversion',
        component: QkLocalconversionComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class QkAdminRoutingModule { }