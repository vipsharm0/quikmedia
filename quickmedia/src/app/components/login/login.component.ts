import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { user } from 'src/app/Models/admin/qk.adminmodule.model';
import { QkConversionService } from 'src/app/service/qk.conversion.service';
import { QkLoginService } from 'src/app/service/qk.login.service';
import { ErrorNotification } from 'src/app/shared/qk.errors.service';
import { utils } from 'src/app/shared/qk.utilities';
import { userModuleConstants } from '../../../constants/usermodule.constants'
declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
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
    private _loginservice: QkLoginService
  ) { }

  ngOnInit(): void {
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
    console.log(this._utils.encryptdata(formdata.value.username, "raju"))
    //  console.log(this._utils.decryptdata(formdata.value.username, "U2FsdGVkX1+krmbb1dT1tTpRoIsC+uZihgrIwLwCdxQ="))
    // console.log(formdata)
    // this._errornotification.showTopLeft();
    this._loginservice.getuser(formdata.value.username).subscribe({
      next: (respObj: user) => {
        if (respObj) {
          const passwd = this._utils.decryptdata(respObj.userId, respObj.password)
          if (passwd == formdata.value.password) {
            this.router.navigate(['/dashboard'])
          } else {
            this.showError = true;
            formdata.reset();
            setTimeout(() => {
              this.showError = false;
            }, 2000);
          }
        }

      }, error: (errobj: any) => {
        console.log(errobj)
        this.showError = true;
        formdata.reset();
        setTimeout(() => {
          this.showError = false;
        }, 2000);
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
