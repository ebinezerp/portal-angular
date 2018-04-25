import { Injectable } from '@angular/core';
import { Employee } from '../register/employee';
import { HttpHeaders } from '@angular/common/http';
import { Http }  from '@angular/http';
import {HttpClient} from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';


export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegisterService {

  constructor(private http:HttpClient) { }


  register(employee:Employee):Observable<Object>{
    console.log(employee);
   return this.http.post<Employee>('http://localhost:8080/profiler-rest/api/employee',employee,httpOptions);
   
  }

}
