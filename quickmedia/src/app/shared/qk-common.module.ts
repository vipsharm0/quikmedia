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



@NgModule({
  declarations: [
    QkErrorsComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    RippleModule,
    MessageModule,
    MessagesModule
  ],
  exports:[ToastModule, RippleModule, QkErrorsComponent],
  providers:[utils, ErrorNotification,MessageService]
})
export class QkCommonModule { }
