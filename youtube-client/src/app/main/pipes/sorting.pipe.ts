import { Pipe, PipeTransform } from '@angular/core';
import { ICardData } from '../models/card-data-interface';

type SortType = 'asc' | 'desc' | '';

@Pipe({
  name: 'sorting',
})
export class SortingPipe implements PipeTransform {
  transform(value: ICardData[] | null, field?: string, type?: SortType): ICardData[] {
    if (!value) {
      return [];
    }

    if (!type || !field) {
      return value;
    }

    const valueCopy = [...value];

    return valueCopy.sort((a, b) => {
      const isAsc = type === 'asc';
      switch (field) {
        case 'date':
          return SortingPipe.compaire(a.date, b.date, isAsc);
        case 'viewCount':
          return SortingPipe.compaire(a.statistics.viewCount, b.statistics.viewCount, isAsc);
        default:
          throw new Error('This categoties does not exist!');
      }
    });
  }

  private static compaire(a: Date | string, b: Date | string, isAsc: boolean) {
    return (a > b ? 1 : -1) * (isAsc ? 1 : -1);
  }
}
