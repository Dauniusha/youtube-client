import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [HttpService],
})
export class SearchBarComponent implements OnInit {
  query: string = '';

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  search() {
    this.httpService.getCards(this.query);
  }
}
