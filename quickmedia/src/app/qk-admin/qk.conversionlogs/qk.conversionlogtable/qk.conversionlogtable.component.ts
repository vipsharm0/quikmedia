import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qk-conversionlogtable',
  templateUrl: './qk.conversionlogtable.component.html',
  styleUrls: ['./qk.conversionlogtable.component.css']
})
export class QkConversionlogtableComponent implements OnInit {
  qk:object[] = [{
    qkid:"Zepto_Shankar_Mahadevan_20TELSD",
    suploadstatus:true,
    previewstatus:true,
    conversionstatus:false,
  },
  {
    qkid:"Zepto_Shankar_Mahadevan_30TELSD",
    suploadstatus:false,
    previewstatus:true,
    conversionstatus:false,
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
