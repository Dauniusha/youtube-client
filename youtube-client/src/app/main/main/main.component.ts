import { Component, Input, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { CardData } from '../models/card-data-interface';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [
    HttpService,
  ],
})
export class MainComponent implements OnInit {
  @Input() query: string = '';

  @Input() sortData?: Sort;

  cards?: Observable<CardData[]>;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.cards = this.httpService.getCards();
  }
}
