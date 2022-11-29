import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {Message} from 'primeng/api';

@Component({
  selector: 'qk-errors',
  templateUrl: './qk.errors.component.html',
  styleUrls: ['./qk.errors.component.css']
})
export class QkErrorsComponent implements OnInit, OnDestroy {
  errormessages:Message[]
  @Input() errortext: string;
  
  constructor() { }

  ngOnInit(): void {
    this.errormessages = [
      {severity:'error', life:20000, summary:'Error', detail:this.errortext}
    ]
  }

  ngOnDestroy() {
    console.log('sdsd')
  }

}
