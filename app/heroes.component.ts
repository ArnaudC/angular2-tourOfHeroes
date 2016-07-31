import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  directives: [HeroDetailComponent],
  providers: []
})

export class HeroesComponent implements OnInit {
  public heroes: Hero[];
  public heroesSameYear: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) { }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    // this.heroService.getHeroesSameYear(hero).
    //   then(heroesSameYear => heroesSameYear.length >= 1 ? this.heroesSameYear = heroesSameYear : this.heroesSameYear = null);
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

  addHero() {
    let newHero = this.heroService
      .save(new Hero())
      .then(hero => this.heroes.push(hero));
  }

  // addHero() {
    // this.addingHero = true;
    // this.selectedHero = null;
  // }

  close(savedHero: Hero) {
    // this.addingHero = false;
    // if (savedHero) { this.getHeroes(); }
  }

  deleteHero(hero, $event) {
    event.stopPropagation();
    this.heroService.delete(hero)
      .then(response => {
        this.heroes = this.heroes.filter(h => h.id != hero.id);
        if (this.selectedHero == hero) {
          this.selectedHero = null;
        }
      })
  }
}
