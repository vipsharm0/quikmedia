import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MultiSelectModule} from 'primeng/multiselect';
import { QkOrdersRoutingModule } from './qk-orders-routing.module';
import { QkOrderListComponent } from './qk-order-list/qk-order-list.component';
import { FormsModule } from '@angular/forms';
import { QkCommonModule } from '../shared/qk-common.module';
import { QkOrderlisttableComponent } from './qk-order-list/qk-orderlisttable/qk-orderlisttable.component';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    QkOrderListComponent,
    QkOrderlisttableComponent
  ],
  imports: [
    CommonModule,
    QkOrdersRoutingModule,
    FormsModule,
    QkCommonModule,
    FieldsetModule,
    TableModule,
    MultiSelectModule,
    ButtonModule
  ]
})
export class QkOrdersModule { }
