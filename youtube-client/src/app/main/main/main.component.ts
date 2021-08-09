import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  cards?: Observable<CardData[]>;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.cards = this.httpService.getCards();
  }
}
