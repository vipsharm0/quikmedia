import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { client, qkState } from '../Models/qk.conversion.model';
import { QkConversionService } from '../service/qk.conversion.service';
import { QkLoginService } from '../service/qk.login.service';

@Component({
  selector: 'app-qk-conversion',
  templateUrl: './qk-conversion.component.html',
  styleUrls: ['./qk-conversion.component.css']
})
export class QkConversionComponent implements OnInit {

  
  @ViewChild('gmrFrm') gmrfrm!: NgForm;
  clients:client[];
  selectedClient:client;
  files: any[] = [];
  constructor(private ConversionService: QkConversionService,
    private _stateservice:QkLoginService) {    

  }

  ngOnInit(): void {
    this._stateservice.appState.subscribe((data:any)=>{
      this.clients = data;
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
    this.ConversionService.uploadfiles(filelist, true, this.selectedClient).subscribe(resp => {
      // alert('file uploaded');
    });
  }

}
