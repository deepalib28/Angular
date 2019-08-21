import { Component, OnInit } from '@angular/core';
import{Heroes} from './hero-mock';
import{Hero} from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes=Heroes;
  constructor() { }

  ngOnInit() {
  }

  selectedHero : Hero;
  OnSelectHero(hero:Hero)
  {
    this.selectedHero=hero;
  }
}
