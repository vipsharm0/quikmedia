import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { QkReportsRoutingModule } from './qk-reports-routing.module';
import { QkDelieveryComponent } from './qk.delievery/qk.delievery.component';
import { QkDelieverytableComponent } from './qk.delievery/qk.delieverytable/qk.delieverytable.component';
import { InputTextModule } from "primeng/inputtext";
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {MultiSelectModule} from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { QkDelieverytrackerComponent } from './qk.delieverytracker/qk.delieverytracker.component';
import { QkDelieverytrackertableComponent } from './qk.delieverytracker/qk.delieverytrackertable/qk.delieverytrackertable.component';
import { QkCommonModule } from '../shared/qk-common.module';

@NgModule({
  declarations: [
    QkDelieveryComponent,
    QkDelieverytableComponent,
    QkDelieverytrackerComponent,
    QkDelieverytrackertableComponent
  ],
  imports: [
    CommonModule,
    QkReportsRoutingModule,
    PanelModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    MultiSelectModule,
    FormsModule,
    QkCommonModule
  ]
})
export class QkReportsModule { }
