import {createSelector} from "@ngrx/store";
import {AppState} from "../app.state";
import {HeroesState} from "../../interfaces/Heroes.state";

export const selectHeroFeature = (state: AppState) => state.heroes;

export const selectListHeroes = createSelector(
  selectHeroFeature,
  (state: HeroesState) => state.heroes
)

export const selectLoading = createSelector(
  selectHeroFeature,
  (state: HeroesState) => state.loading
)

export const selectAddHero = createSelector(
  selectHeroFeature,
  (state: HeroesState) => state.heroes
)
