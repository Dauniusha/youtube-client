import { CardStatistics } from './card-statistics-interface';

export interface CardData {
  id: string;
  title: string;
  description: string;
  statistics: CardStatistics;
  date: string;
}
