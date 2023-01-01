import { Component, OnInit } from '@angular/core';
import { mpr } from 'src/app/Models/qk.conversion.model';

@Component({
  selector: 'app-qk-inputuploadtable',
  templateUrl: './qk.inputuploadtable.component.html',
  styleUrls: ['./qk.inputuploadtable.component.css']
})
export class QkInputuploadtableComponent implements OnInit {

  gridValues: mpr[]=[];
  selectAll: boolean = false;
  constructor() {
    this.gridValues.push({
      id: 1,
      QuikID: "Quickid1",
      Language: "Tamil",
      Caption: "caption1",
      Brand: "Brand1",
      Dur: 1,
      SDHD: "SDHD",
      SpecCode: "code1",
      OutPutURL: "outputurl1"
     })
     this.gridValues.push({
      id: 2,
      QuikID: "Quickid2",
      Language: "Tamil2",
      Caption: "caption2",
      Brand: "Brand2",
      Dur: 2,
      SDHD: "SDHD2",
      SpecCode: "code2",
      OutPutURL: "outputurl2"
     })
   }

  ngOnInit(): void {
  }

}
