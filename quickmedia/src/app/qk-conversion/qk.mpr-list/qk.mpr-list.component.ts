import { Component, Input, OnInit } from '@angular/core';
import { client, mpr, order } from 'src/app/Models/qk.conversion.model';
import { QkLoginService } from 'src/app/service/qk.login.service';
import { menuitems } from 'src/app/shared/qk.menuitems';

@Component({
  selector: 'app-qk.mpr-list',
  templateUrl: './qk.mpr-list.component.html',
  styleUrls: ['./qk.mpr-list.component.css']
})
export class QkMprListComponent implements OnInit {

  orderDisabled:boolean=true;
  clients:client[];
  selectedorder:order;
  orders:order[];
  selectedClient:client;
  first = 0;

  rows = 1;
  cols: any[];
  _selectedColumns: any[];
  mprlist:mpr[] = [];
  constructor(public _menuitems:menuitems,
    private _stateservice:QkLoginService) { 

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
    this._stateservice.appState.subscribe((data: any) => {
      if (data) {
        let filteredClients = data.filter( dt => dt.key == "clients")
        let filteredOrders = data.filter( dt => dt.key == "orders")
        if(filteredClients && filteredClients.length > 0){
          this.clients = filteredClients[0].val
        }
        if(filteredOrders && filteredOrders.length > 0){
          this.orders = filteredOrders[0].val
        }
     
      }

    })

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

changeclient(client:client){
  console.log(JSON.stringify(client))
  this.orderDisabled = false;
  this.orders = this.orders.filter( dt => dt.Id == client.Id)
}

}
