import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class convertService {

  constructor(

    ){ }

      getCurrentDate(unix:number){
        unix=unix*1000;
        return new Date(unix).toDateString().slice(0,10);
      }

}
