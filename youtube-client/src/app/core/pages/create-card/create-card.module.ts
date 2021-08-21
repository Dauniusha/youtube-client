import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCardComponent } from './create-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateCardRoutingModule } from './create-card-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    CreateCardRoutingModule
  ],
  declarations: [CreateCardComponent]
})
export class CreateCardModule { }
