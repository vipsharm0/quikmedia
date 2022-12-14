import { Component, Input, OnInit } from '@angular/core';
import { gmr, gmrValidationData } from 'src/app/Models/qk.conversion.model';

@Component({
  selector: 'qk-gmrerrorlist',
  templateUrl: './qk.gmrerrorlist.component.html',
  styleUrls: ['./qk.gmrerrorlist.component.css']
})
export class QkGmrerrorlistComponent implements OnInit {

  @Input() errorList:gmrValidationData;
  errors:gmr[];
  constructor() { }

  ngOnInit(): void {
    this.errors = this.errorList.errors;
  }

}
