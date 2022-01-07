import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-detailinfo',
  templateUrl: './detailinfo.component.html',
  styleUrls: ['./detailinfo.component.css']
})
export class DetailinfoComponent implements OnInit {
  info:string="info";
  am:string[]=[];
  pm:string[]=[];
  @ViewChild("container") container?:ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.generateHours();
  }

  //IMPORTANT! add cause' container element exist AFTER view load, not during. 
  //by any way, this is just for test, cause' You will call the fuction by click a button (it means, after view laod) 
  //you can delete this function, is just for education.
  ngAfterViewInit(){      
    console.log(this.container)
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
}
