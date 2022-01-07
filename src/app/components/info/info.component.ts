import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/entities/info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  // ubication:string="country, city";
  // image:string="../../assets/icons/1.svg";
  // temperature:number=21;
  // date:string="DD/MM/YYYY";
  // day:string="day";
  // hour:string="HH:MM";
  // wind:number=12;
  // humedity:number=65;
  // rain:number= 65;

  Info:Info={
    ubication:"",
    image:"",
    temperature:0,
    date:"",
    day:"",
    hour:"",
    wind:0,
    humedity:0,
    rain:0,
  };


  constructor() { }

  ngOnInit(): void {
   
  }
}
