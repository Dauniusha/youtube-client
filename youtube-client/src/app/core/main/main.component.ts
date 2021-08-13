import { Component, Input, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ICardData } from '../../main/models/card-data-interface';
import { HttpService } from '../../shared/services/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() sortingByWordQuery: string = '';

  @Input() sortData?: Sort;

  public cards: Observable<ICardData[]> = this.httpService.response$;

  constructor(public httpService: HttpService) {
  }

  ngOnInit(): void {
  }
}
