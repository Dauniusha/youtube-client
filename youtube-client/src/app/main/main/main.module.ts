import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniCardComponent } from '../components/mini-card/mini-card.component';
import { MainComponent } from './main.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { StatisticsFilterPipe } from '../pipes/statistics-filter.pipe';
import { TitleFilterPipe } from '../pipes/title-filter.pipe';

import { SetColorDatePlaceholderDirective } from '../directives/set-color-date-placeholder.directive';



@NgModule({
  declarations: [
    MainComponent,
    MiniCardComponent,
    StatisticsFilterPipe,
    TitleFilterPipe,
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
