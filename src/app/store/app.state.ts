import {ActionReducerMap} from "@ngrx/store";
import {HeroesState} from "../interfaces/Heroes.state";
import {heroesReducer} from "./reducers/hero.reducers";


export interface AppState {
  heroes: HeroesState
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  heroes: heroesReducer
}
