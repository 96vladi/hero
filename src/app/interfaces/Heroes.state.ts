import {Hero} from "./Hero";

export interface HeroesState{
  loading: boolean,
  heroes: ReadonlyArray<Hero>;
}
