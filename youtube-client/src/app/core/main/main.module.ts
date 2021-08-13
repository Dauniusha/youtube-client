import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MiniCardComponent } from '../../main/components/mini-card/mini-card.component';
import { MainComponent } from './main.component';

import { StatisticsFilterPipe } from '../../main/pipes/statistics-filter.pipe';
import { TitleFilterPipe } from '../../main/pipes/title-filter.pipe';

import { SetColorDatePlaceholderDirective } from '../../main/directives/set-color-date-placeholder.directive';
import { FilterByWordPipe } from '../../main/pipes/filter-by-word.pipe';
import { SortingPipe } from '../../main/pipes/sorting.pipe';

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
