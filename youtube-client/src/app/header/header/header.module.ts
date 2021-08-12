import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { SettingBtnComponent } from '../components/setting-btn/setting-btn.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';

import { SortingBarComponent } from '../components/sorting-bar/sorting-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SettingBtnComponent,
    SearchBarComponent,
    UserProfileComponent,
    SortingBarComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSortModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule { }
