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
  city:string="roma";
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
            this.location(0)
    }

                //get Info to distribute to Child components
    location(i:number){
      this.getLocation.search(this.city).subscribe(city=>{
            this.cityPackage=city;
            this.citiesToshow=[];
            this.citiesToshow=city;
            this.city=city[i].name;
            this.getCurrentForecast.getCurrent(city[i].lat, city[i].lon).subscribe(data=>{
                this.currentForecastPackage=data;
            })
            this.getPast.getPast(city[i].lat, city[i].lon, this.date-86400).subscribe(data=>{
                this.historicalPackage=data;
            })
      })
    }

    showList(){
      this.getLocation.search(this.city).subscribe(data=>{
        this.citiesToshow=[];
        this.citiesToshow=data;
        console.log(this.citiesToshow);
      })
   }

   selectSearch(id:number){
     for(let i=0; i<5; i++){
        if(id==i){
        this.city=this.citiesToshow[i].name;
        this.location(i)
      }
     }
   }
  
}
