import { Injectable } from '@angular/core';
import {Message, MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Injectable()

export class ErrorNotification{
    errormessage:Message[];
    constructor(
        private _messageservice: MessageService,
        private _primengconfig: PrimeNGConfig
    ){
        this._primengconfig.ripple = true;
    }

    showTopLeft(error:any) {
        this._messageservice.add({key: 'bc', life:30000,severity:'error', summary: 'Error', detail: error.error.text});
    }
    showError() {
        this._messageservice.add({severity:'error', summary: 'Error', detail: 'Message Content'});
    }
    showfullmessage(){
        this.errormessage = [
            {severity:'error', summary:'Error', detail:'Invalid Username or Password'}
        ];
    }
}