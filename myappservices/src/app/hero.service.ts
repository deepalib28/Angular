import { Injectable } from '@angular/core';
import {HEROES} from './heroes/hero-mock';
import {Hero} from './heroes/hero';
import {observable, of, Observable} from 'rxjs'
import {MessageService} from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  

  // getHeroes():Hero[]{
  //   return HEROES;
  // }

  // getHeroes():Observable<Hero[]>{
  //   return of(HEROES);
  // }

  //inject message service in heroservice
  constructor(private messageservcie:MessageService) { }

  //Modify the getHeroes method to send a message when the heroes are fetched.
getHeroes():Observable<Hero[]>
{
  this.messageservcie.add("heroservice fetched  heroes")
  return of(HEROES);
}
}
