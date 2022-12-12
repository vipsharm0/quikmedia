import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Subject } from 'rxjs';
import { urlConstants } from 'src/constants/url.constants';
import { ClientData, qkState } from '../Models/qk.conversion.model';

@Injectable({
  providedIn: 'root'
})
export class QkLoginService {
  qkState:qkState = new qkState()
  private stateObject = new BehaviorSubject<qkState>(this.qkState);
  appState = this.stateObject.asObservable();

  constructor(private http: HttpClient) { }

 
  updateState(state: qkState) {
    this.stateObject.next(state);
    }
  
  getuser(username:string){
    const url = urlConstants.getuser;
    let params = new HttpParams()
    .set('userid', username)
    return this.http.get(url, {params})
  }
}

