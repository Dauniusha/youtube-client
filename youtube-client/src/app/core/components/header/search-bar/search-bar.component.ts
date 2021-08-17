import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  public query: string = '';

  constructor(private httpService: HttpService) { }

  public ngOnInit(): void {
  }

  public search() {
    this.httpService.getCards(this.query);
  }
}
