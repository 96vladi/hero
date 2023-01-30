import {Component, Input, OnInit} from '@angular/core';
import {HeroService} from "../../../services/hero.service";
import {Hero} from "../../../interfaces/Hero";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.state";
import {selectListHeroes} from "../../../store/selectors/hero.selectors";

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.scss']
})
export class ListHeroComponent implements OnInit {

  @Input() listHero: Hero[] = [];
  @Input() height: string = 'height: 300px';
  heroes$: Observable<ReadonlyArray<Hero>> = new Observable();
  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.heroes$ = this.store.select(selectListHeroes);
  }



}
