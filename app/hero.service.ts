import {Injectable} from '@angular/core';
import {Hero} from './hero';
import 'rxjs/add/operator/toPromise';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';

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

    // error handler
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    // Get a hero
    getHero(id: number) {
        return this.getHeroes().
            then(heroes => heroes.find(hero => hero.id === id));
    }

    // Add new Hero
    private post(hero: Hero): Promise<Hero> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // Update existing Hero
    private put(hero: Hero) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .put(url, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    delete(hero: Hero) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.heroesUrl}/${hero.id}`;

        return this
            .http
            .delete(url, {headers: headers})
            .toPromise()
            .catch(this.handleError);
    }

    save(hero:Hero): Promise<Hero> {
        if (hero.id) {
            return this.put(hero);
        } else {
            return this.post(hero);
        }
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

    // getHeroesSameYear(hero: Hero) {
    //     return this.getHeroes().
    //         then(heroes => {
    //             heroes.forEach(hero => { // patch to ste date instead of string
    //                 hero.birthday = new Date(hero.birthday.toString());
    //                 console.log(hero.birthday.getFullYear());
    //             });
    //             return heroes
    //             .filter(h =>
    //                 hero != h && (
    //                     (!!hero.birthday && !!h.birthday) ? (h.birthday.getFullYear() === hero.birthday.getFullYear()) : false ||
    //                         (!hero.birthday && !h.birthday) ? true : false
    //                 )
    //             )
    //         });
    // }
}
