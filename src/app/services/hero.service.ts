import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Hero} from "../interfaces/Hero";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private baseURL = "http://localhost:3000/heroes";

  constructor(private http: HttpClient) {
  }

  getHero(){
    return this.http.get<Hero[]>(`${this.baseURL}`);
  }

  searchHero(hero: string){
    return this.http.get<Hero[]>(`${this.baseURL}?q=${hero}`);
  }

  addHero(hero: Hero){
    console.log(hero)
    return this.http.post<Hero>(`${this.baseURL}`,hero);
  }

  deleteHero(heroId: string){
    return  this.http.delete<Hero>(`${this.baseURL}/${heroId}`)
  }
}
