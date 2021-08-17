import {
  Component, OnInit, Output, EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-setting-btn',
  templateUrl: './setting-btn.component.html',
  styleUrls: ['./setting-btn.component.scss'],
})
export class SettingBtnComponent implements OnInit {
  public isOpened: boolean = false;

  @Output() onOpened = new EventEmitter<boolean>();

  constructor() { }

  public ngOnInit(): void { }

  public changeOpenedState() {
    this.isOpened = !this.isOpened;
    this.onOpened.emit(this.isOpened);
  }
}
