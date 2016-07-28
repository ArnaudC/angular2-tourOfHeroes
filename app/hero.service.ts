import {Injectable} from '@angular/core';
import {Hero} from './hero';
import 'rxjs/add/operator/toPromise';
import {Http} from '@angular/http';

@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';  // URL to web api

    constructor(private http: Http) { }

    getHeroes() {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


    // getHeroesSlowly() {
    //     return new Promise<Hero[]>(resolve =>
    //         setTimeout(() => resolve(HEROES)
    //             , 2000)
    //     );
    // }

    // getTopHeroes() {
    //     // return Promise.resolve(HEROES
    //         // .filter(hero => hero.id >= 15).sort((h1, h2) => h2.id - h1.id)
    //         // .slice(1, 5)
    //     // );
    //     return this.http.get(this.heroesUrl)
    //         .toPromise()
    //         .then(response => response.json().data.slice(1, 5) as Hero[])
    //         .catch(this.handleError);
    // }

    getHero(id: number) {
        return this.getHeroes().
            then(heroes => heroes.find(hero => hero.id === id));
    }

    getHeroesSameYear(hero: Hero) {
        return this.getHeroes().
            then(heroes => heroes
                .filter(h =>
                    hero != h && (
                        (!!hero.birthday && !!h.birthday) ? (h.birthday.getFullYear() === hero.birthday.getFullYear()) : false ||
                            (!hero.birthday && !h.birthday) ? true : false
                    )
                ));
    }
}
