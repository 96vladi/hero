import {createReducer, on} from "@ngrx/store";
import {addHeroAction, loadedHero, loadHero} from "../actions/hero.actions";
import {HeroesState} from "../../interfaces/Heroes.state";

export const initialState: HeroesState = {loading: false, heroes: []}

export const heroesReducer = createReducer(
  initialState,
  on(loadHero, (state) => {
    return {...state, loading: true}
  }),
  on(loadedHero, (state, {heroes}) => {
    return {...state, loading: false, heroes}
  }),
  /*Add Hero*/
  on(addHeroAction, (state, {hero}) => {
    return {...state, ...[hero]}
  })
 /* on(addHeroAction, (state, action) => ({
    ...state,
    heroes: [...state.heroes, action.hero]
  }))*/
)
