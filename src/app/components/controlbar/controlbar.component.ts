import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-controlbar',
  templateUrl: './controlbar.component.html',
  styleUrls: ['./controlbar.component.css']
})
export class ControlbarComponent implements OnInit, OnChanges {
 
  @Input() currentForecastPackage:any;
  variableData:any;
  buttonId?:number

  constructor() { }

  ngOnInit(): void {
  
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("horas")
    this.setHourly()    
  }

  setHourly(){
    this.variableData=this.currentForecastPackage.hourly;
  }

  getButton(id:number){
    this.buttonId=id;
    console.log(this.buttonId)
  }

}
