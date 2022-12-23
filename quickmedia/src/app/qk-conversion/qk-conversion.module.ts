import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QkConversionRoutingModule } from './qk-conversion-routing.module';
import { QkConversionComponent } from './qk-conversion.component';
import { DndDirective } from '../directives/dnd.directive';
import {TableModule} from 'primeng/table';
import { QkMprListComponent } from './qk.mpr-list/qk.mpr-list.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule, } from 'primeng/fieldset';
import { QkConversionExecuteComponent } from './qk.conversion.execute/qk.conversion.execute.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { QkCommonModule } from '../shared/qk-common.module';
import { QkGmrerrorlistComponent } from './qk.gmrerrorlist/qk.gmrerrorlist.component';
import { QkMprlisttableComponent } from './qk.mpr-list/qk.mprlisttable/qk.mprlisttable.component';

@NgModule({
  declarations: [
    QkConversionComponent,
    DndDirective,
    QkMprListComponent,
    QkConversionExecuteComponent,
    QkGmrerrorlistComponent,
    QkMprlisttableComponent
  ],
  imports: [
    CommonModule,
    QkConversionRoutingModule,
    TableModule,
    MultiSelectModule,
    FormsModule,
    ButtonModule,
    FieldsetModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    QkCommonModule,
  ]
})
export class QkConversionModule { }
