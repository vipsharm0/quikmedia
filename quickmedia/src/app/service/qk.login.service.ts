import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlConstants } from 'src/constants/url.constants';

@Injectable({
  providedIn: 'root'
})
export class QkLoginService {

  constructor(private http: HttpClient) { }

  getuser(username:string){
    const url = urlConstants.getuser;
    let params = new HttpParams()
    .set('userid', username)
    return this.http.get(url, {params})
  }
}

