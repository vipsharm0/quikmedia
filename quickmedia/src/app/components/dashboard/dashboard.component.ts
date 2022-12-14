import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { qkState } from 'src/app/Models/qk.conversion.model';
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
export class DashboardComponent implements OnInit {

  menudata:object;
  conversiontext:string;
  constructor(
    private _menuitems: menuitems,
    private _loginservice:QkLoginService,
    private _conversionservice:QkConversionService,
    private _activatedRouteSnapshot:ActivatedRoute,
    ) { 

    // this.conversiontext = this._menuitems.getMenuBarHeading(userModuleConstants.conversion);
  }

  
  ngOnInit(): void {
  
    this._activatedRouteSnapshot.params.subscribe(loggeduser=>{
      this.conversiontext = loggeduser["user"];
      forkJoin([
        this._loginservice.getuser(loggeduser["user"]),
        this._conversionservice.getclients(loggeduser["user"])
      ]).subscribe({
        next:(response)=>{
          let state:qkState;
          this.menudata = this._menuitems.getroles(response[0]["data"][0]);
          console.log("menudata loaded")
          const clientDetails:qkState = response[1]["data"]  
          this._loginservice.updateState(clientDetails)    
        }
      })

      // this._loginservice.getuser(loggeduser["user"])
      // .subscribe({
      //   next: (respObj: UserData)=>{
      //     this.menudata=this._menuitems.getroles(respObj.data[0]);
      //     // console.log(this.menudata)
      //   }
      // })
    })
   }

  abc():string{
    return this._menuitems.getMenuBarHeading(userModuleConstants.conversion);
  }

  ngAfterViewInit(){
  }

}
