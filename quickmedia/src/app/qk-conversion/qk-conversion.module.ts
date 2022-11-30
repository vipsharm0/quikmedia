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
import { FieldsetModule, } from 'primeng/fieldset';
import { QkConversionExecuteComponent } from './qk.conversion.execute/qk.conversion.execute.component';



@NgModule({
  declarations: [
    QkConversionComponent,
    DndDirective,
    QkMprListComponent,
    QkConversionExecuteComponent
  ],
  imports: [
    CommonModule,
    QkConversionRoutingModule,
    TableModule,
    MultiSelectModule,
    FormsModule,
    ButtonModule,
    FieldsetModule
  ]
})
export class QkConversionModule { }
