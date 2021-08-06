import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SettingBtnComponent } from '../components/setting-btn/setting-btn.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';

import { MatButtonModule } from '@angular/material/button';
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
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule { }
