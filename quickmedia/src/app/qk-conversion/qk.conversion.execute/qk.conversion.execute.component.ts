import { Component, OnInit, ViewChild } from '@angular/core';
import { QkConversionService } from 'src/app/service/qk.conversion.service';
import { LoaderService } from 'src/app/shared/qk.spinner.service';

@Component({
  selector: 'app-qk.conversion.execute',
  templateUrl: './qk.conversion.execute.component.html',
  styleUrls: ['./qk.conversion.execute.component.css']
})
export class QkConversionExecuteComponent implements OnInit {
  files: any[] = [];
  isUploaded:boolean = false;
  constructor(private ConversionService: QkConversionService,
    private _loaderService:LoaderService) { }

  ngOnInit(): void {
  }

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
            this.isUploaded = true;            
          }, 9000)
        }
        )
      }
       
    }      
  }
}
