import {Actions, createEffect, ofType} from "@ngrx/effects";
import {EMPTY} from "rxjs";
import {map, mergeMap, catchError, concatMap} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {HeroService} from "../../services/hero.service";

import { HeroAction } from "../actions/index"

@Injectable()

export class HeroEffects {

  constructor(
    private actions$: Actions,
    private heroService: HeroService
  ) {
  }

  loadHeroes$ = createEffect(() => this.actions$.pipe(
      ofType('[Hero list] Load heroes'),
      mergeMap(() => this.heroService.getHero()
        .pipe(
          map(heroes => ({type: '[Hero list] Loaded success', heroes})),
          catchError(() => EMPTY)
        ))
    )
  );

  addHero$ = createEffect(() => this.actions$.pipe(
    ofType(HeroAction.addHeroAction),
    concatMap((action) => this.heroService.addHero(action.hero)
      .pipe(
        map((saveHero) => ({type: '[Hero list] Add Hero', hero:saveHero})),
        catchError(() => EMPTY)
      ))
    )
  );
}
