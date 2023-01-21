import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qk-campaignlisttable',
  templateUrl: './qk.campaignlisttable.component.html',
  styleUrls: ['./qk.campaignlisttable.component.css']
})
export class QkCampaignlisttableComponent implements OnInit {

  qk:object[] = [{
    orderno:"Zepto_231222",
    assigned:"uploader1",
    qkid:"Zepto_Shankar_Mahadevan_20TELSD",
    channels:"Star Suvarna/Star Suvarna Plus",
    destination:"Star Suvarna SD",
    lan:"tel",
    brand:"zepto",
    duration:20
  },
  {
    orderno:"Zepto_231222",
    assigned:"uploader2",
    qkid:"Zepto_Shankar_Mahadevan_20TELSD",
    channels:"Star Suvarna/Star Suvarna Plus",
    destination:"Star Suvarna SD",
    lan:"tel",
    brand:"zepto",
    duration:40
  }]
  // qkobj: data[];
  constructor() { }

  ngOnInit(): void {
  }

}
