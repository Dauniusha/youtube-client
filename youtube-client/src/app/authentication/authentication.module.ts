import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthenticationModule { }
