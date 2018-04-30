import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { HrService } from '../../service/hr.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../model/employee';
import { Location } from '@angular/common';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  constructor(private hrService:HrService,private route:ActivatedRoute,private location:Location) { }

 employee: any={};
  ngOnInit() {
   
    this.hrService.getEmployee(+this.route.snapshot.paramMap.get('id')).subscribe
    (
      data=>
      {
        this.employee=data;
      },
      error=>
      {
        console.log(error);
      }
    )
  }

  statusUpdate(status)
  {
    this.employee.status=status;
    this.hrService.statusUpdate(this.employee).subscribe
    (
      data=> console.log("employee updated"),
      error=> console.log(error)
    )
  }


  goBack():void
  {
    this.location.back();
  }

}
