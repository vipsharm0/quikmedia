import { Component, OnInit } from '@angular/core';
import { mpr } from 'src/app/Models/qk.conversion.model';

@Component({
  selector: 'app-qk.mpr-list',
  templateUrl: './qk.mpr-list.component.html',
  styleUrls: ['./qk.mpr-list.component.css']
})
export class QkMprListComponent implements OnInit {

  mprlist:mpr[] = [];
  constructor() { 

    let mprdata1 = new mpr();
    mprdata1.brand="Bata Footwear";
    mprdata1.caption = "WO_SUBS_WITH_GAIN";
    mprdata1.duration = 40;
    mprdata1.id = 1;
    mprdata1.language = "HNG";
    mprdata1.link = "https://fs-quikdrop.s3"
    mprdata1.quickid = "WSWGAIN40HNGHD2"
    mprdata1.specscode = "IMX50.MXF";
    mprdata1.type = "HD";
    this.mprlist.push(mprdata1)
    let mprdata2 = new mpr();
    mprdata2.brand="Bata Footwear";
    mprdata2.caption = "WO_SUBS_WITH_GAIN";
    mprdata2.duration = 20;
    mprdata2.id = 2;
    mprdata2.language = "KAN";
    mprdata2.link = "https://fs-quikdrop.s3"
    mprdata2.quickid = "WSWGAIN40HNGHD2"
    mprdata2.specscode = "IMX54.MXF";
    mprdata2.type = "SD";
    this.mprlist.push(mprdata2)

  }

  ngOnInit(): void {
  }

}
