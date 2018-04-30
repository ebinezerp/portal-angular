import { Component, OnInit } from '@angular/core';
import { EmployeerService } from '../service/employeer.service';
import { Employee } from '../model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeer',
  templateUrl: './employeer.component.html',
  styleUrls: ['./employeer.component.css']
})
export class EmployeerComponent implements OnInit {

  employee:Employee;
  constructor(private router:Router){
    if(localStorage.getItem('employee')!=null)
  {
    this.employee=JSON.parse(localStorage.getItem('employee'));
    if(this.employee.role!='employeer')
    {
       this.router.navigate(['login'])
    }

  }else
  {
     this.router.navigate(['login'])
  }
  }


  ngOnInit(): void {
    
  }
}
