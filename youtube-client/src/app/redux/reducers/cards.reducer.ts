import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { cardsActionsMap } from "../actions/cards.actions";
import { IAppState, ICardsState, initialCardsState } from "../state.models";

export const cardsReducer = createReducer(
  initialCardsState,
  on(cardsActionsMap.loadYoutube, (state: ICardsState, { cards }) => ({ ...state, youtubeCards: cards })),
  on(cardsActionsMap.loadCustom, (state: ICardsState, { cards }) => ({ ...state, customCards: [...state.customCards, cards] }))
);

// export const customCardsReducer = createReducer(
//   initialCardsState,
//   on(cardsActionsMap.loadCustom, (state: ICardsState, { cards }) => ({ ...state, customCards: [...state.customCards, cards] }))
// );

export const appReducers: ActionReducerMap<IAppState, any> = {
  cards: cardsReducer,
}