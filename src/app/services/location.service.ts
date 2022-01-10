import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class getLocationService {

    name?:string;
    lat?:number;
    lon?:number;

  constructor(
    private http: HttpClient,
    ){ }

  search(name:string):Observable<any>{
    return this.http.get("https://api.openweathermap.org/geo/1.0/direct?q="+name+"&limit=5&appid=08c76ae8a032cfda2404ed64d740eab7");  
  }
}