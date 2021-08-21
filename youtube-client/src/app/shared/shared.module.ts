import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { StatisticsFilterPipe } from '../youtube/pipes/statistics-filter.pipe';
import { CardStatisticsComponent } from './components/card-statistics/card-statistics.component';
import { SetColorDatePlaceholderDirective } from './directives/set-color-date-placeholder.directive';
import { LoadersComponent } from './components/loaders/loaders.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    CardStatisticsComponent,
    LoadersComponent,
    InputComponent,

    StatisticsFilterPipe,

    SetColorDatePlaceholderDirective,
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    CardStatisticsComponent,
    SetColorDatePlaceholderDirective,
    LoadersComponent,
    InputComponent
  ],
})
export class SharedModule { }
