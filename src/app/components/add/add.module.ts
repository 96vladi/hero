import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewHeroComponent } from './new-hero/new-hero.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { HeroPreviewComponent } from './hero-preview/hero-preview.component';



@NgModule({
  declarations: [
    NewHeroComponent,
    HeroPreviewComponent
  ],
  exports: [
    NewHeroComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AddModule { }
