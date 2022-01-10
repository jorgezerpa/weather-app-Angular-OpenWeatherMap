import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { getLocationService } from 'src/app/services/location.service';
import { convertService } from 'src/app/services/convert.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit, OnChanges {
  @Input() currentForecastPackage:any;
  @Input() ubication?:string;

  temperature?:number;
  date?:string;
  wind?:number;
  humidity?:number;
  rain?:number;

  constructor(
    private getLocation:getLocationService,
    private convert:convertService
    ) { }

  ngOnInit(): void {} 

  ngOnChanges(changes: SimpleChanges): void {
        if(changes.currentForecastPackage)this.useData();   
  }

  useData(){
      this.temperature= parseInt(this.currentForecastPackage.current.temp);
      this.date=this.convert.getCurrentDate(this.currentForecastPackage.current.dt);
      this.wind=this.currentForecastPackage.current.wind_speed;
      this.humidity= this.currentForecastPackage.current.humidity;
      this.rain=this.currentForecastPackage.daily[0].pop;
  }

}
