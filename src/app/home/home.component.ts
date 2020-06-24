import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
         // here we create a property inside the class and we give it a value
        clickCounter :number = 0;
 constructor() { }
// here we create the method that we will call it when i click the button in html, when i click it will take the property clickCounter and it will add the value (1) to it
//Car Rental Project

// You should in this project, have an array of objects with cars and show them on the main page.
// There should be a button in the NavBar with the label "Donate 10€" and every time that you click, it should add up 10€.
// When it's value reaches 200€, it should show a Message in the middle of the NavBar that you are "VIP".
// There also should be a Contact us page with a form with as many inputs as you consider pertinent. Do not forget to add the validators to them!!

countClick(){
         this.clickCounter ++;
 }

 cars = [
  {
    name: "Audi",
  // img: 32'
  },{
    name: "BMW",
    // img: 28
  },{
    name:"Volvo",
    // img: 26
  }, {
    name:"Mercedes",
    // img: 26
  }
];


ngOnInit() {
}

}
