import { ICardStatistics } from './card-statistics-interface';

export interface ICardData {
  id: string;
  title: string;
  description: string;
  statistics: ICardStatistics;
  date: Date;
}
