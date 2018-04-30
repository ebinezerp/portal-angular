import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { HrService } from '../service/hr.service';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {

  
  employees:Employee[];

  

  constructor(private hrService:HrService) { }

  ngOnInit() {
    this.hrService.getPendingEmployees().subscribe(
      data=>
      {
        console.log("successfully")
        console.log(data);
         this.employees=data;
         console.log(this.employees);
      },
      (error)=>
      {
        console.log(error)
      }
    )
  }

}
