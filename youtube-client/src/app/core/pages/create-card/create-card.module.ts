import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { CreateCardComponent } from './create-card.component';
import { CreateCardRoutingModule } from './create-card-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    CreateCardRoutingModule,
  ],
  declarations: [CreateCardComponent],
})
export class CreateCardModule { }
