import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { first, Subject, Subscription } from 'rxjs';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { client, order } from 'src/app/Models/qk.conversion.model';
import { QkConversionService } from 'src/app/service/qk.conversion.service';
import { LoaderService } from 'src/app/shared/qk.spinner.service';


@Component({
  selector: 'app-qk.conversion.execute',
  templateUrl: './qk.conversion.inputupload.component.html',
  styleUrls: ['./qk.conversion.inputupload.component.css']
})
export class QkConversionExecuteComponent implements OnInit {
  emailTo:string;
  emailCc:string;
  emailSubject:string;
  visibleSidebar:boolean;
  files: any[] = [];
  msgSubs:Subscription;
  clients:client[];
  orders:order[];
  orderDisabled:boolean=true;
  selectedClient:client;
  selectedorder:order;
  @ViewChild('toastmsg', {static: false}) private toastcomp;
  // uploadedSuccessMsg:Subject<string>=this.ConversionService.uploadingMsg;

  constructor(private ConversionService: QkConversionService,
    private _loaderService:LoaderService,
    private elRef: DashboardComponent) { }

  ngOnInit(): void {
    this.msgSubs = this.ConversionService.uploadingMsg
    .pipe(first()).subscribe    
    ((data:boolean)=>{
      if (data){
        this.elRef.videoUpload();
        this.msgSubs.unsubscribe();
      }
      
    })
  }
  test(){
    alert('hi')
  }
  changeclient(client:client){
    // this.orderDisabled = false;
    // this.orders = this.orders.filter( dt => dt.ClientID == client.Id)  
  }

  searchOrders(){

  }
  searchMpr(){}
  ngOnDestroy(){
    this._loaderService.hideUploading();
  }

  ngAfterViewInit(){
    if(this.ConversionService.isBusy){
       this._loaderService.showUploading();
    }
  }

  fileBrowseHandler(ev: Event) {
    this.prepareFilesList(ev);
  }
  onFileDropped(files:FileList) {
    // this.prepareFilesList($event);
    let filelist: FileList | null = files;
      this.ConversionService.uploadfiles(filelist).subscribe(resp => {
        // alert('file uploaded');
      });
  }

  prepareFilesList(ev: Event) {
    let elem = ev.currentTarget as HTMLInputElement;
    let filelist: FileList | null = elem.files;
    
    if(filelist){
      this._loaderService.showUploading();
      for(let i=0; i<filelist.length; i++){
        
        this.ConversionService.s3uploadFiles(filelist[i]).then(resp =>{
          
          window.setTimeout(ab=>{
            this._loaderService.hideUploading();
            this.ConversionService.isBusy = false;
            this.ConversionService.setUploadingMsg(true)
          }, 9000)
        }
        )
      }
       
    }      
  }
}
