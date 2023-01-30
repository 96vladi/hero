import {createAction, props} from "@ngrx/store";
import {Hero} from "../../interfaces/Hero";

export const loadHero = createAction(
  '[Hero list] Load heroes'
)

export const loadedHero = createAction(
  '[Hero list] Loaded success',
  props <{ heroes: Hero[]}>()
)

/*AddHero*/

export const addHeroAction = createAction(
  '[Hero list] Add Hero',
  props<{hero: Hero}>()
)
