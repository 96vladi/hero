import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../interfaces/Hero";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {Observable} from "rxjs";
import {selectLoading} from "../../store/selectors/hero.selectors";
import {loadHero} from "../../store/actions/hero.actions";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<AppState>) {
  }

  loading$: Observable<boolean> = new Observable();

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadHero())
  }

}
