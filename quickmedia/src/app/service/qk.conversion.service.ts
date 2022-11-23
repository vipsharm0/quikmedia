import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QkConversionService {

  constructor(
    private http: HttpClient
  ) { }

  getUser() {
    let headers = new HttpHeaders().set('mode', 'no-cors');
    let params = new HttpParams().set('logNamespace', "vipin");
    return this.http.get('//api.quikdrop.in/api/quik/getuser?userid=vipin')
  }

  uploadfiles(files: FileList | null) {
    let frmdata = new FormData();
    if(files != null){
      if (files.length > 0) {
        let i = 0;
        for(let x=0, len=files.length; x < len; x++){
          frmdata.append(`file-${i}`, files[x], files[x].name)
        }
        // files.forEach(item => {
          
        // })
  
      }
    }
  
    return this.http.post("https://jsonplaceholder.typicode.com/posts", frmdata)
  }
}


