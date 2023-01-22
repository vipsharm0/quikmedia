import { Component, OnInit, ViewChild } from '@angular/core';
import { client, order, viewOrder, viewOrderData } from 'src/app/Models/qk.conversion.model';
import { QkConversionService } from 'src/app/service/qk.conversion.service';
import { QkLoginService } from 'src/app/service/qk.login.service';

@Component({
  selector: 'app-qk.delievery',
  templateUrl: './qk.delievery.component.html',
  styleUrls: ['./qk.delievery.component.css']
})
export class QkDelieveryComponent implements OnInit {

  @ViewChild('orderlistmsg', {static: false}) private toastcomp;
  campaigns:viewOrder[];
  selectedorder:order;
  orders:order[];
  selectedClient:client;
  clients:client[];
  orderDisabled:boolean=true;

  constructor(
    private _stateservice:QkLoginService,
    private _conversionService: QkConversionService
  ) { }

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

  changeclient(client:client){
    this.orderDisabled = false;
    this.orders = this.orders.filter( dt => dt.ClientID == client.Id)  
  }
  searchOrders(){
    const selectedOrderId = (!this.selectedorder)?0:this.selectedorder.Id;
    this._conversionService.getOrderList(this.selectedClient.Id, selectedOrderId).subscribe({
      next:(respData:viewOrderData) =>{
        if(respData.success){
          this.campaigns = respData.data
        }else{
          this.toastcomp.showerror("No Data Found");
          this.campaigns = null;
        }
        
      },
      error:(err)=>{
        this.toastcomp.showerror("Exception occured");
      }
    })
  }

}
