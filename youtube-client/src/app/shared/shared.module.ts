import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { StatisticsFilterPipe } from '../youtube/pipes/statistics-filter.pipe';
import { CardStatisticsComponent } from './components/card-statistics/card-statistics.component';
import { SetColorDatePlaceholderDirective } from './directives/set-color-date-placeholder.directive';

@NgModule({
  declarations: [
    CardStatisticsComponent,
    StatisticsFilterPipe,

    SetColorDatePlaceholderDirective
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    CardStatisticsComponent,
    SetColorDatePlaceholderDirective
  ],
})
export class SharedModule { }
