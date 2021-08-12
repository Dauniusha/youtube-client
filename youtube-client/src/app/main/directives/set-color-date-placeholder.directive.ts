import { Directive, HostBinding, Input } from '@angular/core';
import * as moment from 'moment';
import { setting } from 'src/app/settings/setting';

@Directive({
  selector: '[appSetColorDatePlaceholder]',
})
export class SetColorDatePlaceholderDirective {
  @HostBinding('style.background') public background: string = '';

  constructor() { }

  @Input() set appSetColorDatePlaceholder(date: Date) {
    this.background = setting.stringConstants.color.red;
    const daysDifference = moment().diff(moment(date), 'days');

    if (daysDifference < 7) {
      this.background = setting.stringConstants.color.blue;
    } else if (daysDifference < 30) {
      this.background = setting.stringConstants.color.green;
    } else if (daysDifference < 180) {
      this.background = setting.stringConstants.color.yellow;
    }
  }
}
