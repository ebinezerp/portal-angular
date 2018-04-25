import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { Employee } from '../register/employee';

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
      {console.log(data);
        this.employee=data;
        this.router.navigate(['employee']);
      },
      (error)=>console.log(error)
    )
  }
}
