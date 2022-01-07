import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class getDataService {
  readonly URLall:string="https://api.openweathermap.org/data/2.5/onecall?lat=22&lon=33&exclude={}&appid=08c76ae8a032cfda2404ed64d740eab7&units=metric";
  readonly URLcurrent:string="https://api.openweathermap.org/data/2.5/onecall?lat=22&lon=33&exclude=minutely,hourly,daily,alerts&appid=08c76ae8a032cfda2404ed64d740eab7";
  readonly URLhourly:string="https://api.openweathermap.org/data/2.5/onecall?lat=22&lon=33&exclude=minutely,current,daily,alerts&appid=08c76ae8a032cfda2404ed64d740eab7";
  readonly URLdaily:string="https://api.openweathermap.org/data/2.5/onecall?lat=22&lon=33&exclude=minutely,hourly,current,alerts&appid=08c76ae8a032cfda2404ed64d740eab7";
  readonly URLhistorical:string="http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=60.99&lon=30.9&dt=1641586510&appid=08c76ae8a032cfda2404ed64d740eab7";
  readonly URLsearch:string="https://api.openweathermap.org/geo/1.0/direct?q=cuba&limit=1&appid=08c76ae8a032cfda2404ed64d740eab7";

  constructor(
    private http: HttpClient,
    ){ }

  getCurrent():Observable<any>{
    return this.http.get(this.URLcurrent);  
  }

  getDaily():Observable<any>{
    return this.http.get(this.URLdaily);  
  }

  getHourly():Observable<any>{
    return this.http.get(this.URLhourly);  
  }

  getAll():Observable<any>{
    return this.http.get(this.URLall);  
  }
  
  getHistorical():Observable<any>{
    return this.http.get(this.URLhistorical);  
  }

  searchCountry():Observable<any>{
    return this.http.get(this.URLsearch);  
  }
}
 
