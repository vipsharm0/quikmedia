import { Component, OnInit } from '@angular/core';
import { QkConversionService } from 'src/app/service/qk.conversion.service';

@Component({
  selector: 'app-qk.conversion.execute',
  templateUrl: './qk.conversion.execute.component.html',
  styleUrls: ['./qk.conversion.execute.component.css']
})
export class QkConversionExecuteComponent implements OnInit {
  files: any[] = [];
  constructor(private ConversionService: QkConversionService) { }

  ngOnInit(): void {
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
    this.ConversionService.uploadfiles(filelist).subscribe(resp => {
      // alert('file uploaded');
    });
  }
}
