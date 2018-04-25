import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../register/employee';
import { Observable } from 'rxjs/Observable';


export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class LoginService {

  constructor(private http:HttpClient) { }


  login(username:string,password:string):Observable<Employee>
  {
    console.log(username+" "+password);
    var body='username='+username+'&password='+password;
    return this.http.post<Employee>('http://localhost:8080/profiler-rest/api/employee/login',body,httpOptions);
  }

}
