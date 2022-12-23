import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })

  export class LoaderService {

    isLoading = new Subject<boolean>();
    isUploading = new Subject<boolean>();
  
    constructor() {
    }
  
    show() {
       this.isLoading.next(true);
    }
  
    hide() {
       this.isLoading.next(false);
    }

    showUploading() {
      this.isUploading.next(true);
   }
 
   hideUploading() {
      this.isUploading.next(false);
   }
  }