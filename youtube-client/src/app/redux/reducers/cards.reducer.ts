import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { loadCustomCards, loadYoutubeCards } from "../actions/cards.actions";
import { ICardsState, initialCardsState } from "../state.models";

export const youtubeCardsReducer = createReducer(
  initialCardsState,
  on(loadYoutubeCards, (state: ICardsState, { cards }) => ({ ...state, youtubeCards: cards }))
);

export const customCardsReducer = createReducer(
  initialCardsState,
  on(loadCustomCards, (state: ICardsState, { cards }) => ({ ...state, customCards: [...state.customCards, cards] }))
);

// export const appReducers: ActionReducerMap<ICardsState, any> = {
// }