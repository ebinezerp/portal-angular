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


export const routes:Routes=[
{path:'',component:LandingComponent,
children:[{
  path:'',component:RegisterComponent
},{
  path:'login',component:LoginComponent,
}]},
{
  path:'employee',component:EmployeeComponent
}

]


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LandingComponent,
    LoginComponent,
    EmployeeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RegisterService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
