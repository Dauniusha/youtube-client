import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { InputComponent } from './components/input/input.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
})
export class AuthenticationModule { }
