import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http/http.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  public filterSubject: Subject<Event> = new Subject();

  constructor(private httpService: HttpService) { }

  public ngOnInit(): void {
    this.filterSubject.pipe(
      map((event: any) => (<HTMLInputElement> event.target).value), // TODO: не знаю, как пофиксить any
      debounceTime(500),
      distinctUntilChanged(),
    )
      .subscribe((data: string) => this.httpService.getCards(data));
  }
}
