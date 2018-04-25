import { Injectable } from '@angular/core';
import { Employee } from './register/employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegisterService {

  constructor(private http:HttpClient) { }


  register(employee:Employee):void{
    console.log(employee);
    // return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
    //   tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
    //   catchError(this.handleError<Hero>('addHero'))
    //http://localhost:8080/profiler-rest/api/employee
    // );
     
    console.log(this.http.post<Employee>('http://localhost:8080/profiler-rest/api/employee',employee,httpOptions));
  }

}
