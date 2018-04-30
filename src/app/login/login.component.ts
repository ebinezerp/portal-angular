import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string='';
  password:string='';
  message:string='';

  employee:Employee;

  constructor(private loginService:LoginService,private router:Router) { }

getEmployee():Employee
  {
    return this.employee;
  }

  ngOnInit() {
  }

  login():void
  {
    console.log(this.username+"   "+this.password);
    this.loginService.login(this.username,this.password)
    .subscribe
    (
      (data)=>
      {
        console.log(data);
        this.employee=data;
        localStorage.setItem("employee",JSON.stringify(this.employee));
        if(this.employee.role=='emp')
        {
          this.router.navigate(['employee']);
        }else if(this.employee.role=='hr')
        {
          this.router.navigate(['hr']);
        }else if(this.employee.role=='employeer')
        {
            this.router.navigate(['employeer'])
        }
            
      },
      (error)=>console.log(error)
    )
  }
}
