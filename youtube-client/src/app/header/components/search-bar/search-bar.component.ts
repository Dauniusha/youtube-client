import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() onHeaderChanged = new EventEmitter<string>()

  query: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  emitQuery() {
    this.onHeaderChanged.emit(this.query);
  }
}
