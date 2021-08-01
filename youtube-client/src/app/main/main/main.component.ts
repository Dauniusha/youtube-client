import { Component, OnInit } from '@angular/core';
import { CardData } from '../models/card-data-interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  private cards: CardData[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
