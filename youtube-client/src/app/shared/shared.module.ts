import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { StatisticsFilterPipe } from '../youtube/pipes/statistics-filter.pipe';
import { CardStatisticsComponent } from './components/cards/card-statistics/card-statistics.component';
import { SetColorDatePlaceholderDirective } from './directives/set-color-date-placeholder.directive';
import { LoadersComponent } from './components/loaders/loaders.component';
import { InputComponent } from './components/input/input.component';
import { TitleButtonDateComponent } from './components/cards/title-button-date/title-button-date.component';
import { CardPreviewComponent } from './components/cards/card-preview/card-preview.component';

@NgModule({
  declarations: [
    CardStatisticsComponent,
    LoadersComponent,
    InputComponent,
    TitleButtonDateComponent,
    CardPreviewComponent,

    StatisticsFilterPipe,

    SetColorDatePlaceholderDirective,
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    CardStatisticsComponent,
    CardPreviewComponent,
    TitleButtonDateComponent,
    SetColorDatePlaceholderDirective,
    LoadersComponent,
    InputComponent,
  ],
})
export class SharedModule { }
