import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FormGroup, ReactiveFormsModule }from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterService } from './register.service';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LandingComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
