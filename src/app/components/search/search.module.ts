import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchHeroComponent } from './seek-hero/search-hero.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    SearchHeroComponent,
  ],
  exports: [
    SearchHeroComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class SearchModule { }
