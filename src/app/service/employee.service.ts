import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';
import { httpOptionsJson } from './register.service';

@Injectable()
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }


  update(employee:Employee):Observable<Employee>
  {
     return this.httpClient.put<Employee>('http://localhost:8080/profiler-rest/api/employee',employee,httpOptionsJson);
  }

}
