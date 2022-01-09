import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class getPastDataService {

  constructor(
    private http: HttpClient,
    ){ }

    getPast(lat:number, lon:number, unix:number):Observable<any>{
        return this.http.get("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat="+lat+"&lon="+lon+"&dt="+unix+"&appid=08c76ae8a032cfda2404ed64d740eab7&units=metric");  
      }
}