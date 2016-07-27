import {HEROES} from './mock-heroes';
import {Injectable} from '@angular/core';
import {Hero} from './hero';

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES)
                , 2000)
        );
    }

    getTopHeroes() {
        return Promise.resolve(HEROES
            // .filter(hero => hero.id >= 15).sort((h1, h2) => h2.id - h1.id)
            .slice(1, 5)
        );
    }

    getHero(id: number) {
        return this.getHeroes().
            then(heroes => heroes.find(hero => hero.id === id));
    }

    // getHeroesSameYear(hero: Hero) {
    //     return this.getHeroes().
    //         then(heroes => heroes
    //             .filter(h =>
    //                 hero != h && (
    //                     (!!hero.birthday && !!h.birthday) ? (h.birthday.getFullYear() === hero.birthday.getFullYear()) : false ||
    //                         (!hero.birthday && !h.birthday) ? true : false
    //                 )
    //             ));
    // }
}
