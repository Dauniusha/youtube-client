import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './pages/main/main.module';
import { DetailedInformationModule } from './pages/detailed-information/detailed-information.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainModule,
    DetailedInformationModule,
  ],
})
export class YoutubeModule { }
