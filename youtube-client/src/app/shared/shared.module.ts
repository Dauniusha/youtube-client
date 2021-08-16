import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsFilterPipe } from '../main/pipes/statistics-filter.pipe';
import { MatIconModule } from '@angular/material/icon';
import { CardStatisticsComponent } from './components/card-statistics/card-statistics.component';



@NgModule({
  declarations: [
    CardStatisticsComponent,
    StatisticsFilterPipe,
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    CardStatisticsComponent,
  ]
})
export class SharedModule { }
