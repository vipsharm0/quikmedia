import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { client, gmrValidationData, qkState } from '../Models/qk.conversion.model';
import { QkConversionService } from '../service/qk.conversion.service';
import { QkLoginService } from '../service/qk.login.service';

@Component({
  selector: 'app-qk-conversion',
  templateUrl: './qk-conversion.component.html',
  styleUrls: ['./qk-conversion.component.css'],
})
export class QkConversionComponent implements OnInit {

  showmsg:boolean=false;
  @ViewChild('gmrFrm') gmrfrm!: NgForm;
  @ViewChild('toastmsg', {static: false}) private toastcomp;
  clients:client[];
  selectedClient:client;
  gmrValidationData: gmrValidationData;
  files: any[] = [];
  constructor(private ConversionService: QkConversionService,
    private _stateservice:QkLoginService) {    

  }

  ngOnInit(): void {
    this._stateservice.appState.subscribe((data: any) => {
      if (data) {
        let filterdata = data.filter(function (dt) {
          return dt.key == "clients"
        })
        this.clients = filterdata[0].val;
      }

    })
  }

  fileBrowseHandler(ev: Event) {
    this.prepareFilesList(ev);
  }
  onFileDropped(files:FileList) {
    // this.prepareFilesList($event);
    let filelist: FileList | null = files;
      this.ConversionService.uploadfiles(filelist, true, this.selectedClient).subscribe(resp => {
        // alert('file uploaded');  
      });
  }

  prepareFilesList(ev: Event) {
    let elem = ev.currentTarget as HTMLInputElement;
    let filelist: FileList | null = elem.files;  
    this.ConversionService.uploadfiles(filelist, true, this.selectedClient).subscribe({
      next:(response:gmrValidationData)=>{
        if(!response.success){
          this.gmrValidationData = response;
        }else{
          this.showmsg = true
           this.toastcomp.showBottomCenter("Mpr Created Successfully");
        }
        // console.log(JSON.stringify(response));
        // this.gmrValidationData = response;
      },
      error:errResp=>{

      }
    });
  }

}
