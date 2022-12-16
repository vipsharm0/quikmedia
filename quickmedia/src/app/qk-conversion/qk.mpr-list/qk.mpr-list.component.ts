import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { client, mpr, mprData, order } from 'src/app/Models/qk.conversion.model';
import { QkConversionService } from 'src/app/service/qk.conversion.service';
import { QkLoginService } from 'src/app/service/qk.login.service';
import { menuitems } from 'src/app/shared/qk.menuitems';

@Component({
  selector: 'app-qk.mpr-list',
  templateUrl: './qk.mpr-list.component.html',
  styleUrls: ['./qk.mpr-list.component.css']
})
export class QkMprListComponent implements OnInit {

  @ViewChild('toastmsg', {static: false}) private toastcomp;
  mprData:mprData;
  mprs:mpr[];
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
    private _stateservice:QkLoginService,
    private _conversionService: QkConversionService) { 

   
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

searchMpr(){
  const selectedOrderId = (!this.selectedorder)?0:this.selectedorder.Id;
  this._conversionService.getMprs(this.selectedClient.Id, selectedOrderId).subscribe({
    next:(respData:mprData) =>{
      if(respData.success){
        this.mprData = respData;
        this.mprs = respData.data
      }else{
        this.toastcomp.showerror("No Data Found");
      }
      
    },
    error:(err)=>{
      this.toastcomp.showerror("Exception occured");
    }
  })
}

}
