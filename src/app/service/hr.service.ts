import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../model/employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class HrService {

  constructor(private httpClient:HttpClient) { }


  getPendingEmployees():Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>('http://localhost:8080/profiler-rest/api/hr');
  }

  getEmployee(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>('http://localhost:8080/profiler-rest/api/employee/'+id);
   }
 

   statusUpdate(employee:Employee):Observable<Employee>
   {
     return this.httpClient.post<Employee>('http://localhost:8080/profiler-rest/api/hr/profilestatus',employee,httpOptions);
   }
}
