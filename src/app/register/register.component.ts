import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { RegisterService } from '../service/register.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  employee:any={};

  constructor(private registerService:RegisterService,private router:Router) { }

  ngOnInit() {
  }

  register():void{
    console.log(this.employee);
    this.registerService.register(this.employee).subscribe(

       data=>{
         console.log("Inserted");
         this.router.navigate(['login']);
         
       }

    );
    this.employee={};
  }
}
