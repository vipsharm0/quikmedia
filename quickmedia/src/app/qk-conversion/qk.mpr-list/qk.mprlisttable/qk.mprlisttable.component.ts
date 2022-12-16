import { Component, Input, OnInit } from '@angular/core';
import { mprData } from 'src/app/Models/qk.conversion.model';

@Component({
  selector: 'qk-mprlisttable',
  templateUrl: './qk.mprlisttable.component.html',
  styleUrls: ['./qk.mprlisttable.component.css']
})
export class QkMprlisttableComponent implements OnInit {

  @Input() gridValues:mprData;
  constructor() { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.gridValues))
  }

}
