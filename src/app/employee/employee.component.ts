import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Employee } from '../model/employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee:Employee;
  tab:number=1;

  displayProfile=true;
  displaySkill=true;
  displayCert=true;

  constructor(private loginService:LoginService,private router:Router,private employeeService:EmployeeService) { 

  

  if(localStorage.getItem('employee')!=null)
  {
    this.employee=JSON.parse(localStorage.getItem('employee'));
    if(this.employee.role!='emp')
    {
       this.router.navigate(['login'])
    }

  }else
  {
     this.router.navigate(['login'])
  }
    

  }

  ngOnInit() {
   
      
       
  }


 private tabs(value):void{
   
    this.tab=value;

  }


private editProfile(value):void
{
  this.displayProfile=value;
}


update():void
{
  console.log(this.employee);
  this.employeeService.update(this.employee).subscribe(
    (data)=>
    {
      localStorage.setItem("employee",JSON.stringify(this.employee));
      this.displayProfile=true;
    },
    (error)=> 
    {
       console.log(error.status);
    }
  )
  
}

}
