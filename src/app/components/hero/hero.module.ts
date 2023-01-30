import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHeroComponent } from './card-hero/card-hero.component';
import { ListHeroComponent } from './list-hero/list-hero.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    CardHeroComponent,
    ListHeroComponent
  ],
  exports: [
    ListHeroComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class HeroModule { }
