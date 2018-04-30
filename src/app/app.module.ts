import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FormGroup, ReactiveFormsModule }from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http'
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterService } from './service/register.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './service/employee.service';
import { EmployeerComponent } from './employeer/employeer.component';
import { EmployeerService } from './service/employeer.service';
import { HrComponent } from './hr/hr.component';
import { HrService } from './service/hr.service';
import { ApproveComponent } from './hr/approve/approve.component';


export const routes:Routes=[
{path:'',component:LandingComponent,
children:[{
  path:'',component:RegisterComponent
},{
  path:'login',component:LoginComponent,
}]},
{
  path:'employee',component:EmployeeComponent
},
{
  path:'employeer',component:EmployeerComponent
},
{
  path:'hr',component:HrComponent
},
{
  path:'hr/:id',component:ApproveComponent
}



]


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LandingComponent,
    LoginComponent,
    EmployeeComponent,
    EmployeerComponent,
    HrComponent,
    ApproveComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RegisterService,LoginService, EmployeeService,EmployeerService, HrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
