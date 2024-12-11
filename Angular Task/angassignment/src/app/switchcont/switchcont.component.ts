import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-switchcont',
  imports: [CommonModule],
  templateUrl: './switchcont.component.html',
  styleUrl: './switchcont.component.css'
})
export class SwitchcontComponent {

  isCond3 : boolean=true;
  isCond2 : boolean=true;


  bike : string[] = ["Hero MotoCorp","Mahindra Two Wheelers","Royal Enfield","Bajaj Auto","TVS Motor Company"];
  car : string[] = ["Maruti Suzuki","Hyundai","Tata Motors","Mahindra","Honda"];
  values: string[] = ["Hero MotoCorp","Mahindra Two Wheelers","Royal Enfield","Bajaj Auto","TVS Motor Company"];

  switch(vals:string){
    if(vals == "bike"){
      console.log("bike")
      this.values = this.bike;
    }
    else if(vals == "car")
    {
      console.log("car");
      this.values = this.car;
    }
  }
}
