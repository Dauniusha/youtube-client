import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statisticsFilter'
})
export class StatisticsFilterPipe implements PipeTransform {

  transform(value?: string): string {
    if (!value) {
      return '';
    }
    
    const numberValue = Number(value);

    if (numberValue > 999999) {
      return Math.floor(numberValue / 1000000) + 'mln';
    } else if (numberValue > 9999) {
      return Math.floor(numberValue / 1000) + 'k';
    }

    return value;
  }

}
