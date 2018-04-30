import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
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

  emailExistsMessage:boolean=false;

  constructor(private registerService:RegisterService,private router:Router) { }

  ngOnInit() {
  }

  register():void{
    console.log(this.employee);
    this.employee.status='pending';
    this.registerService.register(this.employee).subscribe(

       data=>{
         console.log("Inserted");
         this.router.navigate(['login']);
         
       },

       errors => {
            if(errors.status==401)
            {
               console.log("Conflict")
            }
       }

    );
    this.employee={};
  }


  findEmployeeByEmail():void
  {
     this.registerService.findEmployeeByEmail(this.employee.email).subscribe
     (
        (data)=>{
          console.log(data);
          if(data==true)
          {
             this.emailExistsMessage=true;
          }
        },
        (errors)=>{
          console.log(errors.status);
        }
     )
  }
}
