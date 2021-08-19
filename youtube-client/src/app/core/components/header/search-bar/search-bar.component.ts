import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @ViewChild('input', {static: true}) private input?: ElementRef;

  private subscription?: Subscription;

  constructor(private httpService: HttpService) { }

  public ngOnInit(): void {
    if (this.input) {
      this.subscription = fromEvent(this.input.nativeElement, 'input').pipe(
        map((event: any) => (<HTMLInputElement> event.target).value), // TODO: не знаю, как пофиксить any
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((data: string) => this.httpService.getCards(data));
    }
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
