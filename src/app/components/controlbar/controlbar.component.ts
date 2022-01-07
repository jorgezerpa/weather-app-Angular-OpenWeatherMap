import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controlbar',
  templateUrl: './controlbar.component.html',
  styleUrls: ['./controlbar.component.css']
})
export class ControlbarComponent implements OnInit {
  dates:string[]=[
    "temperature", 
    "humedity",
    "rain",
    "wind",
    "UVE",
    "pressure"
  ]
  icons:string[]=[
    "../../assets/icons/2.svg",
    "../../assets/icons/3.svg",
    "../../assets/icons/4.svg",
    "../../assets/icons/5.svg",
    "../../assets/icons/6.svg",
    "../../assets/icons/7.svg"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
