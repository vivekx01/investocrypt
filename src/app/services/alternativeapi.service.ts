import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AlternativeapiService {
  constructor(private http: HttpClient) { }
  private _refreshreq = new Subject<void>();

  get refresh(){
    return this._refreshreq;
  }
  getfng(): Observable<object>{
    return this.http.get('https://api.alternative.me/fng/').pipe(
      tap(()=>{
        this.refresh.next();
      })
    )
  }
  getfng7d(){
    return this.http.get('https://api.alternative.me/fng/?limit=7')
  }
  getcoindata() : Observable<object>{
    return this.http.get('https://api.alternative.me/v2/ticker/?structure=array').pipe(
      tap(()=>{
        this.refresh.next();
      })
    )
  }
  getlistings(): Observable<any> {
    return this.http.get('https://cors-vk.onrender.com/https://api.alternative.me/v2/listings',
    {headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    )
  }
  getcoinbyid(id:any){
    return this.http.get(`https://api.alternative.me/v2/ticker/${id}/`)
  }
}
