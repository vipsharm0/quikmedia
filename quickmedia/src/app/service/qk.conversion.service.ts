import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { client } from '../Models/qk.conversion.model';
import { urlConstants } from 'src/constants/url.constants';

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

  getclients(username:string){
    const url = urlConstants.getclients;
    let params = new HttpParams()
    .set('userid', username)
    return this.http.get(url, {params})
  }

  uploadfiles(files: FileList | null, uploadFlag:boolean = false, client:client=null) {
    let frmdata = new FormData();
    if(files != null){
      if (files.length > 0) {
        let i = 0;
        if(uploadFlag){
          frmdata.append("action", "ProcessGMR")
          frmdata.append("clientId", client.Id.toString())
        }else{
          frmdata.append("action", "CreatePreview")
        }
        
        for(let x=0, len=files.length; x < len; x++){
          frmdata.append(`file-${i}`, files[x], files[x].name)
        }
        // files.forEach(item => {
          
        // })
  
      }
    }
  
    return this.http.post("http://localhost:5000/quickapi/uploadfile", frmdata)
  }
}


