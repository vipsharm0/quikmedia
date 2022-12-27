import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { client } from '../Models/qk.conversion.model';
import { urlConstants } from 'src/constants/url.constants';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QkConversionService {
  private _bucket: S3Client;
  uploadingMsg = new Subject<boolean>();
  public isBusy:boolean = false;
  constructor(
    private http: HttpClient
  ) { 
    
  }

  setUploadingMsg(msgFlag: boolean = false){
    this.uploadingMsg.next(msgFlag);
  }  

  async s3uploadFiles(file: File | null):Promise<any>{
    if(file){
      this._bucket = new S3Client(
        {
          credentials: {
            accessKeyId: environment.AWS_ACCESS_KEY_ID,
            secretAccessKey: environment.AWS_SECRET_ACCESS_KEY,
          },
          region: environment.AWS_REGION,
        }
      );
      this.isBusy = true;
      const params = {
        Bucket: 'vid-ffmpeg',
        Key: file.name,
        Body: file,
        ACL: 'public-read',
        ContentType: file.type
      };

      try {
        // const response = await this._bucket.send(new PutObjectCommand(params));
        window.setTimeout(ab=>{
          return Promise.resolve("response")
        }, 9000)
        
      } catch(error) {
        console.log("FAILURE", error);
      }
    }
  }

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
  getorders(clientId:number=0){
    const url = urlConstants.getorders;
    let params = new HttpParams()
    .set('clientId', clientId)
    return this.http.get(url, {params})
  }

  getOrderList(clientId:number=0, campaignId:number=0){
    const url = urlConstants.getOrderList;
    let params = new HttpParams()
    .set('clientId', clientId)
    .set('compaignID', campaignId)
    return this.http.get(url, {params})
  }

  getMprs(clientId:number=0, orderId:number=0){
    const url = urlConstants.getMpr;
    let params = new HttpParams()
    .set('clientId', clientId)
    .set('compaignID', orderId)
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


