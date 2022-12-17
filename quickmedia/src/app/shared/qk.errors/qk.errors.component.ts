import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'qk-errors',
  templateUrl: './qk.errors.component.html',
  styleUrls: ['./qk.errors.component.css'],
  providers: [MessageService]
})
export class QkErrorsComponent implements OnInit, OnDestroy {
  errormessages: Message[]
  @Input() text: string;
  @Input() type: string;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.errormessages = [
      { severity: 'error', life: 30000, summary: 'Error', detail: this.text }
    ]
  }

  showsuccess(message: string) {
    this.messageService.add({ key: 'br', life: 4000, severity: 'success', summary: 'Success', detail: message });
  }

  showerror(message: string) {
    this.messageService.add({ key: 'br', life: 4000, severity: 'error', summary: 'Error', detail: message });
  }

  clear() {
    this.messageService.clear();
  }
  ngOnDestroy() {
  }

}
