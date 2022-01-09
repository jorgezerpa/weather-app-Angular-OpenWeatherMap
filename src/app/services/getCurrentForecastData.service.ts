import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class getCurrentForecastDataService {

  constructor(
    private http: HttpClient,
    ){ }

    getCurrent(lat:number, lon:number):Observable<any>{
        return this.http.get("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude={}&appid=08c76ae8a032cfda2404ed64d740eab7&units=metric");  
      }
}