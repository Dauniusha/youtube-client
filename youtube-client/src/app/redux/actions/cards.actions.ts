import { createAction, props } from "@ngrx/store";
import { ICardData } from "src/app/youtube/models/card-data-interface";
import { ICustomCardData } from "src/app/youtube/models/custom-card-data";

export enum CardsActionTypes {
  LoadYoutubeCards = '[Youtube cards] Load Cards',
  LoadCustomCards = '[Custom cards] Load Cards'
};

export const loadYoutubeCards = createAction(
  CardsActionTypes.LoadCustomCards,
  props<{ cards: ICardData[] }>()
);

export const loadCustomCards = createAction(
  CardsActionTypes.LoadCustomCards,
  props<{ cards: ICustomCardData }>()
);