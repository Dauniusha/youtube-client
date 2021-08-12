import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MiniCardComponent } from '../components/mini-card/mini-card.component';
import { MainComponent } from './main.component';

import { StatisticsFilterPipe } from '../pipes/statistics-filter.pipe';
import { TitleFilterPipe } from '../pipes/title-filter.pipe';

import { SetColorDatePlaceholderDirective } from '../directives/set-color-date-placeholder.directive';
import { FilterByWordPipe } from '../pipes/filter-by-word.pipe';
import { SortingPipe } from '../pipes/sorting.pipe';

@NgModule({
  declarations: [
    MainComponent,
    MiniCardComponent,

    StatisticsFilterPipe,
    TitleFilterPipe,
    FilterByWordPipe,
    SortingPipe,

    SetColorDatePlaceholderDirective,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    MainComponent,
  ],
})
export class MainModule { }
