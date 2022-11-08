import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { userModuleConstants } from '../../../constants/usermodule.constants'

declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  usernameValidationflag!: Boolean;
  passwordValidationflag!: Boolean;
  constants: any = userModuleConstants;

  @ViewChild('f') loginfrm!: NgForm;

  constructor(public router: Router) { }

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
    console.log(this.loginfrm)
    this.router.navigate(['/dashboard'])
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
