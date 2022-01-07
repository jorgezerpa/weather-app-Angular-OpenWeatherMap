import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  image:string="../../assets/icons/1.svg";
  temperature:number=21;
  day:string="day";

  constructor() { }

  ngOnInit(): void {
  }

}
