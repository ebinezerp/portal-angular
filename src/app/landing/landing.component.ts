import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  employee:any={};

  constructor() { }

  ngOnInit() {
  }

  registrationTab=true;

  onTab(value):void{
    this.registrationTab=value;
  }
}
