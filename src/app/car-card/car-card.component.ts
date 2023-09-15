import { Component } from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent {
Car:any={
  "Id":1,
  "Model":"Automatic",
  "Maker":"Tata",
  "Price":102000,
  "Availability":true
}
}
