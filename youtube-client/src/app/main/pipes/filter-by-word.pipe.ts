import { Pipe, PipeTransform } from '@angular/core';
import { CardData } from '../models/card-data-interface';

@Pipe({
  name: 'filterByWord'
})
export class FilterByWordPipe implements PipeTransform {

  transform(value: CardData[] | null, query: string): CardData[] {
    if (!value) {
      return [];
    }

    if (!query) {
      return value;
    }

    query = query.toLowerCase();

    return value.filter((card) => {
      return card.title.toLowerCase().includes(query);
    });
  }

}
