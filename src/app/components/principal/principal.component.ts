import { Component, OnInit } from '@angular/core';
import { getDataService } from 'src/app/services/getDataService';
import { Info } from 'src/app/entities/info';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})


export class PrincipalComponent implements OnInit {
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


  constructor(private getDataService: getDataService) { }

  ngOnInit(): void {
    this.getData()
  }
  
  getData(){
    this.getDataService.getHistorical().subscribe(data=>{
      console.log(data);
      let h="1h";
      this.Info.ubication="";
      this.Info.image="../../assets/icons/1.svg", //SOLVE: display different image in function to weather data
      this.Info.temperature=data.current.temp;
      this.Info.date= data.current.dt; //modify it
      this.Info.day=data.current.dt; //modify it 
      this.Info.hour=data.current.dt; //modify it;
      this.Info.wind=data.current.wind_speed;
      this.Info.humedity=data.current.humidity;
      this.Info.rain=data.daily[0].pop;
    });
  }


}
