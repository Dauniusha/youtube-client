import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MiniCardComponent } from '../../main/components/mini-card/mini-card.component';
import { MainComponent } from './main.component';

import { TitleFilterPipe } from '../../main/pipes/title-filter.pipe';

import { SetColorDatePlaceholderDirective } from '../../main/directives/set-color-date-placeholder.directive';
import { FilterByWordPipe } from '../../main/pipes/filter-by-word.pipe';
import { SortingPipe } from '../../main/pipes/sorting.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailedInformationComponent } from 'src/app/main/components/detailed-information/detailed-information.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainComponent,
    MiniCardComponent,
    DetailedInformationComponent,

    TitleFilterPipe,
    FilterByWordPipe,
    SortingPipe,

    SetColorDatePlaceholderDirective,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    MainComponent,
  ],
})
export class MainModule { }
