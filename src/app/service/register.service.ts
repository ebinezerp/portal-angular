import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpHeaders } from '@angular/common/http';
import { Http }  from '@angular/http';
import {HttpClient} from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';


export const httpOptionsJson = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export const httpOptionsForm = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class RegisterService {

  constructor(private http:HttpClient) { }


  register(employee:Employee):Observable<Object>{
    console.log(employee);
   return this.http.post<Employee>('http://localhost:8080/profiler-rest/api/employee',employee,httpOptionsJson);
   
  }



  findEmployeeByEmail(email:string):Observable<Boolean>
  {
    var body='email='+email;

    return this.http.post<Boolean>('http://localhost:8080/profiler-rest/api/employee/email',body,httpOptionsForm);
  }

}
