import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { convertService } from 'src/app/services/convert.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit, OnChanges {
    // past
  @Input() currentForecastPackage:any;
  @Input() historicalPackage:any;

  current_temp?:number;
  current_date?:string;

  tom_temp?:number;
  tom_date?:string;

  yes_temp?:number;
  yes_date?:string;



  constructor(
    private convert:convertService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.setData()
      console.log(this.currentForecastPackage)
  }

  setData(){
    this.current_temp=parseInt( this.currentForecastPackage.current.temp);
    this.current_date= this.convert.getCurrentDate(this.currentForecastPackage.current.dt);

    this.tom_temp=parseInt(this.currentForecastPackage.daily[1].temp.day);
    this.tom_date= this.convert.getCurrentDate(this.currentForecastPackage.daily[1].dt);

    this.yes_temp=parseInt(this.historicalPackage.current.temp);
    this.yes_date= this.convert.getCurrentDate(this.historicalPackage.current.dt);  

  }

}
