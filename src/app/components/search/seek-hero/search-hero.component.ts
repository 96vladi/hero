import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Hero} from "../../../interfaces/Hero";
import {HeroService} from "../../../services/hero.service";

@Component({
  selector: 'app-seek-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.scss']
})
export class SearchHeroComponent implements OnInit {
  @Output() listHero: EventEmitter<Hero[]>;

  constructor(private heroService: HeroService) {
    this.listHero = new EventEmitter();
  }

  ngOnInit(): void {

  }

  search(nameHero: string) {
    if (nameHero !== '') {
      this.heroService.searchHero(nameHero).subscribe({
        next: (response) => {
          this.listHero.emit(response);
        }
      })
    } else {
      this.heroService.getHero().subscribe({
        next: (response) => {
          this.listHero.emit(response);
        }
      })
    }
  }

}
