import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { utils } from './qk.utilities';
import { ErrorNotification } from './qk.errors.service';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple'
import { MessageService } from 'primeng/api';
import { QkErrorsComponent } from './qk.errors/qk.errors.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { menuitems } from './qk.menuitems';
import { QkSpinnerComponent } from './qk.spinner/qk.spinner.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { DndDirective } from '../directives/dnd.directive';



@NgModule({
  declarations: [
    QkErrorsComponent,
    QkSpinnerComponent,
    DndDirective
  ],
  imports: [
    CommonModule,
    ToastModule,
    RippleModule,
    MessageModule,
    MessagesModule,
    ProgressSpinnerModule
  ],
  exports:[ToastModule, RippleModule, QkErrorsComponent, QkSpinnerComponent, DndDirective],
  providers:[utils, ErrorNotification,MessageService, menuitems]
})
export class QkCommonModule { }
