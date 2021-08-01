import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { SearchBarComponent } from './header/components/search-bar/search-bar.component';
import { SortingBarComponent } from './header/components/sorting-bar/sorting-bar.component';
import { UserProfileComponent } from './header/components/user-profile/user-profile.component';
import { MainComponent } from './main/main/main.component';
import { MiniCardComponent } from './main/components/mini-card/mini-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    SortingBarComponent,
    UserProfileComponent,
    MainComponent,
    MiniCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
