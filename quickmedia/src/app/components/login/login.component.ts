import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Message } from 'primeng/api';
import { UserData } from 'src/app/Models/admin/qk.adminmodule.model';
// import { user } from 'src/app/Models/admin/qk.adminmodule.model';
import { QkConversionService } from 'src/app/service/qk.conversion.service';
import { QkLoginService } from 'src/app/service/qk.login.service';
import { ErrorNotification } from 'src/app/shared/qk.errors.service';
import { menuitems } from 'src/app/shared/qk.menuitems';
import { utils } from 'src/app/shared/qk.utilities';
import { userModuleConstants } from '../../../constants/usermodule.constants'
declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  test:number = 0
  showError: boolean = false;
  errormessage: Message[];
  usernameValidationflag!: Boolean;
  passwordValidationflag!: Boolean;
  constants: any = userModuleConstants;

  @ViewChild('f') loginfrm!: NgForm;

  constructor(
    public router: Router,
    private conversionservice: QkConversionService,
    private _errornotification: ErrorNotification,
    private _utils: utils,
    private _loginservice: QkLoginService,
    private _menuitems: menuitems
  ) { }

  ngOnInit(): void {
  
    this._loginservice.getuser("admin").subscribe({
      next:(respObj: UserData) => {
        this.test = 2;
      }
    })


    $('.input100').on('blur', function () {
      if ($('.input100').val().trim() != "") {
        $('.input100').addClass('has-val');
      }
      else {
        $('.input100').removeClass('has-val');
      }
    })
    $('.input1001').on('blur', function () {
      if ($('.input1001').val().trim() != "") {
        $('.input1001').addClass('has-val');
      }
      else {
        $('.input1001').removeClass('has-val');
      }
    })
  }


  loginSubmit(formdata: NgForm) {
    //  console.log(this._utils.decryptdata(formdata.value.username, "U2FsdGVkX1+krmbb1dT1tTpRoIsC+uZihgrIwLwCdxQ="))
    // console.log(formdata)
    // this._errornotification.showTopLeft();
    this._loginservice.getuser(formdata.value.username).subscribe({
      next: (respObj: UserData) => {
        if (respObj.success) {          
          const passwd = this._utils.decryptdata(respObj.data[0].userId, respObj.data[0].password)
          if (passwd == formdata.value.password) {
            // this._menuitems.getroles(respObj.data[0])           
             this.router.navigate(['/dashboard/'+formdata.value.username])
          } else {
            this.showError = true;
            formdata.reset();
            setTimeout(() => {
              this.showError = false;
            }, 3000);
          }
        } else {
          this.showError = true;
          formdata.reset();
          setTimeout(() => {
            this.showError = false;
          }, 3000);
        }

      }, error: (errobj: any) => {
        this.showError = true;
        formdata.reset();
        setTimeout(() => {
          this.showError = false;
        }, 3000);
      }
    })
  }

  userblur(e: any): void {
    let returndata: boolean = false;
    returndata = this.getDefaultValidation(e.target.name)
    if (e.target.name == this.constants.user) {
      this.usernameValidationflag = returndata;
    }
    else if (e.target.name == this.constants.pass) {
      this.passwordValidationflag = returndata;
    }

  }

  private getDefaultValidation(name: string) {
    let returnval: boolean = false;


    if (this.loginfrm.form.controls[name].touched && !this.loginfrm.form.controls[name].valid) {
      returnval = true;
    }
    return returnval;
  }

}
