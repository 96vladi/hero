import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero-preview',
  templateUrl: './hero-preview.component.html',
  styleUrls: ['./hero-preview.component.scss']
})
export class HeroPreviewComponent implements OnInit {

  @Input() hero: any= {};
  heigh: String[] = ['width: 125px','height: 100px'];

  constructor() { }

  ngOnInit(): void {
  }

}
