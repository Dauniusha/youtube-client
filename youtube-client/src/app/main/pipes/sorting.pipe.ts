import { Pipe, PipeTransform } from '@angular/core';
import { CardData } from '../models/card-data-interface';

type SortType = 'asc' | 'desc' | '';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(value: CardData[] | null, field?: string, type?: SortType): CardData[] {
    if (!value) {
      return [];
    }

    if (!type || !field) {
      return value;
    }

    const valueCopy = [ ...value ];

    return valueCopy.sort((a, b) => {
      const isAsc = type === 'asc' ? true : false;
      switch (field) {
        case 'date':
          return this.compaire(a.date, b.date, isAsc);
        case 'viewCount':
          return this.compaire(a.statistics.viewCount, b.statistics.viewCount, isAsc);
        default:
          throw new Error('This categoties does not exist!');
      }
    });
  }

  private compaire(a: Date | string, b: Date | string, isAsc: boolean) {
    return (a > b ? 1 : -1) * (isAsc ? 1 : -1);
  }
}
