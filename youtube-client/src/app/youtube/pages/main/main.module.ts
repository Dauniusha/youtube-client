import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailedInformationComponent } from 'src/app/youtube/pages/detailed-information/detailed-information.component';
import { RouterModule } from '@angular/router';
import { MiniCardComponent } from '../../components/mini-card/mini-card.component';
import { MainComponent } from './main.component';

import { TitleFilterPipe } from '../../pipes/title-filter.pipe';

import { SetColorDatePlaceholderDirective } from '../../directives/set-color-date-placeholder.directive';
import { FilterByWordPipe } from '../../pipes/filter-by-word.pipe';
import { SortingPipe } from '../../pipes/sorting.pipe';

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
    RouterModule,
  ],
})
export class MainModule { }
