import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-detailinfo',
  templateUrl: './detailinfo.component.html',
  styleUrls: ['./detailinfo.component.css']
})
export class DetailinfoComponent implements OnInit, OnChanges {
  info:string="info";
  am:string[]=[];
  pm:string[]=[];
  simbol:string="";
  @ViewChild("container") container?:ElementRef;
  @Input() buttonId?:number;
  dataToshow?:any;
  a:any[]=[];
  @Input() hourlyData:any;

  constructor() { }

  ngOnInit(): void {
    this.generateHours();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.selectInfo()
    
  }

  generateHours(){
    for(let i=0; i<24; i++){
      if(i<10) this.am.push("0"+i+":00");
      else if(i<12) this.am.push(i+":00");
      else this.pm.push(i+":00");
    }
  }

  slideRight(){
    this.container?.nativeElement.classList.add("moved")  
  }
  slideLeft(){
    this.container?.nativeElement.classList.remove("moved")  
  }

  takeTemperature(){
    this.a=[];
    for(let i=0; i<this.hourlyData.length/2; i++){
      this.a.push(this.hourlyData[i].temp)
    }
  }
  takeHumidity(){
    this.a=[];
    for(let i=0; i<this.hourlyData.length/2; i++){
      this.a.push(this.hourlyData[i].humidity)
    }
  }
  takeRain(){
    this.a=[];
    for(let i=0; i<this.hourlyData.length/2; i++){
      this.a.push(this.hourlyData[i].pop)
    }
  }
  takeWind(){
    this.a=[];
    for(let i=0; i<this.hourlyData.length/2; i++){
      this.a.push(this.hourlyData[i].wind_speed)
    }
  }
  takeUvi(){
    this.a=[];
    for(let i=0; i<this.hourlyData.length/2; i++){
      this.a.push(this.hourlyData[i].uvi)
    }
  }
  takePressure(){
    this.a=[];
    for(let i=0; i<this.hourlyData.length/2; i++){
      this.a.push(this.hourlyData[i].pressure)
    }
  }

  selectInfo(){
    switch(this.buttonId){
      case 1: this.takeTemperature();
      this.simbol="°"
      break;
      case 2: this.takeHumidity();
      this.simbol="%"
      break;
      case 3: this.takeRain();
      this.simbol="%"
      break;
      case 4: this.takeWind();
      this.simbol="km/h"
      break;
      case 5: this.takeUvi();
      this.simbol="%"
      break;
      case 6: this.takePressure();
      this.simbol="hPa"
      break;
    }
  }

}
