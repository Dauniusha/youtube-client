import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MiniCardComponent } from '../../components/mini-card/mini-card.component';
import { MainComponent } from './main.component';

import { TitleFilterPipe } from '../../pipes/title-filter.pipe';

import { FilterByWordPipe } from '../../pipes/filter-by-word.pipe';
import { SortingPipe } from '../../pipes/sorting.pipe';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    MiniCardComponent,

    TitleFilterPipe,
    FilterByWordPipe,
    SortingPipe,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    RouterModule,
    MainRoutingModule,
  ],
})
export class MainModule { }
