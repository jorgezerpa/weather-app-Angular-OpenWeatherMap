import { Component, OnInit } from '@angular/core';
import { getLocationService } from 'src/app/services/location.service';
import { getCurrentForecastDataService } from 'src/app/services/getCurrentForecastData.service';
import { convertService } from 'src/app/services/convert.service';
import { getPastDataService } from 'src/app/services/getPast.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit {
  date:number=1641728542;
  city:string="venezuela";
  citiesToshow:any[]=[];
  cityPackage:any;
  currentForecastPackage:any;
  historicalPackage:any;


  constructor(
    private getLocation:getLocationService,
    private getCurrentForecast: getCurrentForecastDataService,
    private getPast: getPastDataService,
    private convert: convertService
    ) { }

  ngOnInit(): void {
            this.location()
    }

                //get Info to distribute to Child components
    location(){
      this.getLocation.search(this.city).subscribe(city=>{
            this.cityPackage=city;
            this.citiesToshow=[];
            for(let i=0; i<5; i++)this.citiesToshow.push(city[i]);
            console.log(this.citiesToshow);
            this.city=city[0].name;
            this.getCurrentForecast.getCurrent(city[0].lat, city[0].lon).subscribe(data=>{
                this.currentForecastPackage=data;
            })
            this.getPast.getPast(city[0].lat, city[0].lon, this.date-86400).subscribe(data=>{
                this.historicalPackage=data;
            })
      })
    }
  
}
