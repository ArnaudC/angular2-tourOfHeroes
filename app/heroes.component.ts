import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  directives: [],
  providers: []
})

export class HeroesComponent implements OnInit {
  public heroes: Hero[];
  public heroesSameYear: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) { }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    // this.heroService.getHeroesSameYear(hero).then(heroesSameYear => this.heroesSameYear = heroesSameYear);
  }

  gotoDetail() {
    let link = ['detail/', this.selectedHero.id];
    this.router.navigate(link);
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }
}
