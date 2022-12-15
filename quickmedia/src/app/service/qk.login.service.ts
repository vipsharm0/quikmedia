import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Subject } from 'rxjs';
import { urlConstants } from 'src/constants/url.constants';
import { ClientData, qkstate, qkState } from '../Models/qk.conversion.model';

@Injectable({
  providedIn: 'root'
})
export class QkLoginService {
  qkState:qkState = new qkState()
  private stateItems: qkstate[]=[{key:"0", val:"0"}];
  private stateObject = new BehaviorSubject<qkstate[]>(undefined);
  appState = this.stateObject.asObservable();

  constructor(private http: HttpClient) { }

 
  updateState(ky:string, state: any) {
    let checkFilter= this.stateItems.filter(function(dt){
      return dt.key == ky
    })
    if(checkFilter.length>0){
      this.stateItems.splice(this.stateItems.findIndex(({key}) => key == ky), 1);
    }
    
    this.stateItems.push({key:ky, val:state})
    this.stateObject.next(this.stateItems);
    console.log(this.appState)
    }
  
  getuser(username:string){
    const url = urlConstants.getuser;
    let params = new HttpParams()
    .set('userid', username)
    return this.http.get(url, {params})
  }
}

