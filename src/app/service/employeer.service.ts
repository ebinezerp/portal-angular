import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeerService {

  constructor(private httpClient:HttpClient)
  {

  }
}
