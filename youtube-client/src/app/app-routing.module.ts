import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/guards/authentication.guard';

import { LoginComponent } from './authentication/pages/login/login.component';
import { ErrorComponent } from './core/pages/error/error.component';
import { MainComponent } from './youtube/pages/main/main.component';
import { DetailedInformationComponent } from './youtube/pages/detailed-information/detailed-information.component';

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthenticationGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'video/:id', component: DetailedInformationComponent, canActivate: [AuthenticationGuard] },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard],
})
export class AppRoutingModule { }
