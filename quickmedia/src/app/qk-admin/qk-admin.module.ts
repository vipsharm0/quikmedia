import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QkClientcampaignsComponent } from './qk.clientcampaigns/qk.clientcampaigns.component';
import { QkAdminRoutingModule } from './qk-admin-routing.module';
import { PanelModule } from 'primeng/panel';
import { QkCampaignlisttableComponent } from './qk.clientcampaigns/qk.campaignlisttable/qk.campaignlisttable.component';
import {TableModule} from 'primeng/table';
import { InputTextModule } from "primeng/inputtext";
import { DividerModule } from "primeng/divider";
import { QkConversionlogsComponent } from './qk.conversionlogs/qk.conversionlogs.component';
import { QkConversionlogtableComponent } from './qk.conversionlogs/qk.conversionlogtable/qk.conversionlogtable.component';
import { QkLocalconversionComponent } from './qk.localconversion/qk.localconversion.component';
import { DndDirective } from '../directives/dnd.directive';
import { QkCommonModule } from '../shared/qk-common.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    QkClientcampaignsComponent,
    QkCampaignlisttableComponent,
    QkConversionlogsComponent,
    QkConversionlogtableComponent,
    QkLocalconversionComponent
  ],
  imports: [
    CommonModule,
    QkAdminRoutingModule,
    PanelModule,
    TableModule,
    InputTextModule,
    DividerModule,
    QkCommonModule,
    FormsModule
  ]
})
export class QkAdminModule { }
