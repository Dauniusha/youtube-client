import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCardComponent } from './create-card.component';

const routes: Routes = [
  { path: '', component: CreateCardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCardRoutingModule { }
