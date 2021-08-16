import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './core/error/error.component';
import { MainComponent } from './core/main/main.component';
import { DetailedInformationComponent } from './main/components/detailed-information/detailed-information.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'video/:id', component: DetailedInformationComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
