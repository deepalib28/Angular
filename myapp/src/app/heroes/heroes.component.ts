import { Component, OnInit } from '@angular/core';
import {Hero} from './Hero';
import {HEROES} from './mock-hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero: Hero={
  //   name:'Akshay'
  // };

  heroes= HEROES;
  selectedHero:Hero;
   
  constructor() { }

  ngOnInit() {
  }
  onSelectHero(hero:Hero):void
  {
    this.selectedHero=hero;
  }
}
