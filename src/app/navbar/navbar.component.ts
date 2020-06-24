import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})

export class NavbarComponent implements OnInit {
  projectName: string;
  clickCounter :number = 0;

  constructor() {
  this.projectName = "CarRental";
}

countClick(){
  this.clickCounter ++;

}

  ngOnInit() {

  }
  }
