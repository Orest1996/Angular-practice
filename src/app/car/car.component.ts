import { Component, OnInit } from '@angular/core';
import { CarColor } from "../../interfaces/CarColor";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  colors: CarColor;
  options: string[];
  isEdit: boolean = false;

  constructor() { }

  ngOnInit() {
    this.name = 'BMW';
    this.speed = 320;
    this.model = 'RS8';
    this.colors = {
      car: 'white',
      salon: 'black',
      wheels: 'silver'
    };
    this.options = ['ABS','Autopilot','Auto parking'];
  }

  carSelect(carName) {
    if (carName == 'bmw') {
      this.name = 'BMW';
      this.speed = 320;
      this.model = 'RS8';
      this.colors = {
        car: 'white',
        salon: 'black',
        wheels: 'silver'
      };
      this.options = ['configure wheels', 'ABC', 'parking observer', 'cameras for parking'];
    }else if (carName == 'audi'){
      this.name = 'Audi';
      this.speed = 260;
      this.model = 'MxV8';
      this.colors = {
        car: 'black',
        salon: 'silver',
        wheels: 'gray-white'
      };
      this.options = ['ABS', 'Autopilot', 'Auto parking','monitors','controller of chairs', 'possibility to set the all performance'];
    } else if ( carName == 'mercedes') {
      this.name = 'Mercedes';
      this.speed = 280;
      this.model = 'IMX';
      this.colors = {
        car: 'yellow',
        salon: 'red',
        wheels: 'yellow'
      };
      this.options = ['whether controller', 'Autopilot', 'Auto parking','monitors','controller of chairs',];
    } else {
      this.name = '--------';
      this.speed = 0;
      this.model = '--------';
      this.colors = {
        car: '----------',
        salon: '----------',
        wheels: '----------'
      };
      this.options = ['choose the car'];
    }
  }
  showEdit(){
    this.isEdit = !this.isEdit;
  }

  deleteOpt(opt){
    for(let i = 0; i < this.options.length; i++){
      if(this.options[i] == opt) {
        this.options.splice(i,1);
      }
    }
  }
  addOpt(option) {
    this.options.unshift(option);
    return false;
  }
}
