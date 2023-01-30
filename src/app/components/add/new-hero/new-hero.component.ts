import {Component, Input, OnInit} from '@angular/core';
import {HeroService} from "../../../services/hero.service";
import {Hero} from "../../../interfaces/Hero";
import {Store} from "@ngrx/store";
import {addHeroAction} from "../../../store/actions/hero.actions";

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.scss']
})
export class NewHeroComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addHero(listInputs: string[]){
    let hero: Hero = {
      alter_ego: listInputs[1],
      characters: listInputs[2],
      first_appearance: listInputs[0],
      id: 'marvel-silver',
      publisher: listInputs[3],
      superhero: listInputs[5],
      urlImage: listInputs[4],
    }
    this.store.dispatch(addHeroAction({hero}))
  }
}
