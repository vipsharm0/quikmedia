import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QkConversionRoutingModule } from './qk-conversion-routing.module';
import { QkConversionComponent } from './qk-conversion.component';
import { DndDirective } from '../directives/dnd.directive';


@NgModule({
  declarations: [
    QkConversionComponent,
    DndDirective
  ],
  imports: [
    CommonModule,
    QkConversionRoutingModule
  ]
})
export class QkConversionModule { }
