import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css'],
    providers: [],
    directives: []
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = []
    constructor(private heroService: HeroService, private router: Router) { }

    getTopHeroes() {
        this.heroService.getTopHeroes().then(hero => this.heroes = hero);
    }

    ngOnInit() {
        this.getTopHeroes();
    }

    gotoDetail(hero) {
        let link = ['/detail/', hero.id];
        this.router.navigate(link);
    }

}
