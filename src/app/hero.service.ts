import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { Hunt } from './hunt';
import { Person } from './person';
import { ShotDucks } from './shot-duck';

@Injectable()
export class HuntService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/heroes';  // URL to web api
  private huntsUrl = 'api/hunts'; //URL to web api
  private huntPartnersUrl = 'api/huntPartners';
  private shotDucksUrl = 'api/shotDucks';

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }


  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  getHunts(): Promise<Hunt[]> {
    return this.http.get(this.huntsUrl)
               .toPromise()
               .then(response => response.json().data as Hunt[])
               .catch(this.handleError);
  }

  getHunt(id: number): Promise<Hunt> {
    const url = `${this.huntsUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Hunt)
    .catch(this.handleError);
  }

  getHuntPartners(id: number): Promise<Person[]> {
    console.log('about to get partners');
    const url = `${this.huntPartnersUrl}/?id=${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => 
      response.json().data as Person[])
    .catch(this.handleError);
  }

  getShotDucks(id: number): Promise<ShotDucks[]> {
    const url = `${this.shotDucksUrl}/?id=${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response =>
      response.json().data as ShotDucks[])
    .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}



/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/