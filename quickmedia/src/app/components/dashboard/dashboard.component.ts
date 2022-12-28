import { state } from '@angular/animations';
import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { forkJoin } from 'rxjs';
import { user } from 'src/app/Models/admin/qk.adminmodule.model';
import { client, order, qkstate, qkState } from 'src/app/Models/qk.conversion.model';
import { QkConversionService } from 'src/app/service/qk.conversion.service';
import { QkLoginService } from 'src/app/service/qk.login.service';
import { menuitems } from 'src/app/shared/qk.menuitems';
import { LoaderService } from 'src/app/shared/qk.spinner.service';
import { userModuleConstants } from "src/constants/usermodule.constants";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,AfterViewInit  {
  @ViewChild('toastmssg', {static: false}) private toastcomp;
  menudata:object;
  loggedUser:string;
  userName:string;
  role:string;

  constructor(
    private _menuitems: menuitems,
    private _loginservice:QkLoginService,
    private _conversionservice:QkConversionService,
    private _activatedRouteSnapshot:ActivatedRoute,
    private _loaderService:LoaderService,
    ) { 

    // this.conversiontext = this._menuitems.getMenuBarHeading(userModuleConstants.conversion);
  }

  
  ngOnInit(): void {    
    this._activatedRouteSnapshot.params.subscribe(loggeduser=>{
      this.loggedUser = loggeduser["user"];
      forkJoin([
        this._loginservice.getuser(loggeduser["user"]),
        this._conversionservice.getclients(loggeduser["user"]),
        this._conversionservice.getorders(),
      ]).subscribe({
        next:(response)=>{
          const userData:user = response[0]["data"] 
          this.userName = userData[0].FirstName
          this.menudata = this._menuitems.getroles(response[0]["data"]);
          const clientDetails:client[] = response[1]["data"] 
          const orderDetails:order[] = response[2]["data"]         
          this._loginservice.updateState("clients", clientDetails)   
           this._loginservice.updateState("orders", orderDetails)   
        },
        error:(err)=>{
          this.toastcomp.showerror("Exception occured");
        }
      })  
    })
   }

  abc():string{
    return this._menuitems.getMenuBarHeading(userModuleConstants.conversion);
  }

  videoUpload(){
    this.toastcomp.showsuccess("Videos Uploaded Successfully");
  }

  ngAfterViewInit() {
    // this._loaderService.hide()
}

}
