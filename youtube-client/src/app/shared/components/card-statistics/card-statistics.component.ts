import { Component, Input, OnInit } from '@angular/core';
import { ICardStatistics } from 'src/app/main/models/card-statistics-interface';

@Component({
  selector: 'app-card-statistics',
  templateUrl: './card-statistics.component.html',
  styleUrls: ['./card-statistics.component.scss']
})
export class CardStatisticsComponent implements OnInit {

  @Input() statistics?: ICardStatistics;

  constructor() { }

  ngOnInit(): void {
  }

}
