import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserData } from 'src/app/Models/admin/qk.adminmodule.model';
import { QkLoginService } from 'src/app/service/qk.login.service';
import { menuitems } from 'src/app/shared/qk.menuitems';
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
    private _activatedRouteSnapshot:ActivatedRoute,
    ) { 

    // this.conversiontext = this._menuitems.getMenuBarHeading(userModuleConstants.conversion);
  }

  
  ngOnInit(): void {

    this._activatedRouteSnapshot.params.subscribe(loggeduser=>{
      this.conversiontext = loggeduser["user"];
      this._loginservice.getuser(loggeduser["user"]).subscribe({
        next: (respObj: UserData)=>{
          this.menudata=this._menuitems.getroles(respObj.data[0]);
          console.log(this.menudata)
        }
      })
      console.log(loggeduser)
    })
   }

  abc():string{
    return this._menuitems.getMenuBarHeading(userModuleConstants.conversion);
  }

}
