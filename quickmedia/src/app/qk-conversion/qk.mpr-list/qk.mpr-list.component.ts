import { Component, Input, OnInit } from '@angular/core';
import { mpr } from 'src/app/Models/qk.conversion.model';

@Component({
  selector: 'app-qk.mpr-list',
  templateUrl: './qk.mpr-list.component.html',
  styleUrls: ['./qk.mpr-list.component.css']
})
export class QkMprListComponent implements OnInit {

  first = 0;

  rows = 1;
  cols: any[];
  _selectedColumns: any[];
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

    this.cols = [
      { field: 'id', header: 'Id' },
        { field: 'quickid', header: 'Quick Id' },
        { field: 'language', header: 'Language' },
        { field: 'caption', header: 'Caption' },
        { field: 'brand', header: 'Brand' },
        { field: 'duration', header: 'Duration' },
        { field: 'type', header: 'Type' },
        { field: 'specscode', header: 'Specs Code' },
        { field: 'link', header: 'Link' }
    ];

    this._selectedColumns = this.cols;
  }

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
}

set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter(col => val.includes(col));
}

}
