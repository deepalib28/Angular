import { Component, OnInit } from '@angular/core';
import {HEROES} from './hero-mock'
import { Hero } from './hero';
import {HeroService} from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes:Hero[];

  constructor(private heroService:HeroService) { }

  // getHeroes():void{
  //   this.heroes=this.heroService.getHeroes();
  // }

  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
  selectedHero:Hero
  OnSelectHero(hero:Hero):void
  {
    this.selectedHero=hero;
  }
}
