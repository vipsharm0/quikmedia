import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QkClientcampaignsComponent } from './qk.clientcampaigns/qk.clientcampaigns.component';
import { QkAdminRoutingModule } from './qk-admin-routing.module';
import { PanelModule } from 'primeng/panel';



@NgModule({
  declarations: [
    QkClientcampaignsComponent
  ],
  imports: [
    CommonModule,
    QkAdminRoutingModule,
    PanelModule
  ]
})
export class QkAdminModule { }
