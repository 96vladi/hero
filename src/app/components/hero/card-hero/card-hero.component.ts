import {Component, Input, OnInit} from '@angular/core';
import {HeroService} from "../../../services/hero.service";

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.scss']
})
export class CardHeroComponent implements OnInit {
  @Input() hero: any= {};
  @Input() height: string = 'height: 325px';
  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
  }

  destroyHero(heroId: string){
    console.log(heroId)
    //TODO destroy object in store
  }

}

/*
{
  "id": "marvel-cyclops",
  "superhero": "Cyclops",
  "publisher": "Marvel Comics",
  "alter_ego": "Scott Summers",
  "first_appearance": "X-Men #1",
  "characters": "Scott Summers",
  "urlImage": "../../../../assets/images/heroes/marvel-cyclops.jpg"
},
{
  "alter_ego": "Norrin Radd",
  "characters": "Norrin Radd",
  "first_appearance": "The Fantastic Four #48",
  "id": "marvel-silver",
  "publisher": "Marvel Comics",
  "superhero": "Silver Surfer",
  "urlImage": "../../../../assets/images/heroes/marvel-silver.jpg"
},
{
    "id": "marvel-hawkeye",
    "superhero": "Hawkeye",
    "publisher": "Marvel Comics",
    "alter_ego": "Clinton Francis Barton",
    "first_appearance": "Tales of Suspense #57",
    "characters": "Clinton Francis Barton",
    "urlImage": "../../../../assets/images/heroes/marvel-hawkeye.jpg"
  }*/
