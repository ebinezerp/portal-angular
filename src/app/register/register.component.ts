import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { RegisterService } from '../register.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  employee:any={};

  form:FormGroup;

  constructor(private registerService:RegisterService) { }

  ngOnInit() {
  }

  register():void{
    console.log(this.employee);
    this.registerService.register(this.employee);
    this.employee={};
  }
}
