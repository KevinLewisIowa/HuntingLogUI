import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';

import { Hunt } from './hunt';
import { Person } from './person';
import { ShotDucks } from './shot-duck';
import { Store } from '@ngrx/store';
import { IMainStore } from './state-management/main.store';

@Injectable()
export class HuntService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private heroesUrl = 'api/heroes';  // URL to web api
  //private huntsUrl = 'api/hunts'; //URL to web api
  //private huntPartnersUrl = 'api/huntPartners';
  //private shotDucksUrl = 'api/shotDucks';
  private baseUrl = 'https://rocky-depths-92084.herokuapp.com/';

  constructor(private http: Http, private store: Store<IMainStore>) { }

  getHunts(){
    return this.http.get(this.baseUrl + `hunts`).toPromise()
          .then(response => response.json().data as Hunt[])
          .then(payload => ({ type: 'GET_HUNTS', payload}))
          .then(action => this.store.dispatch(action));
  }

  getHunt(id: number): Promise<Hunt> {
    const url = `${this.baseUrl}hunts/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Hunt)
    .catch(this.handleError);
  }

  addHuntTest(hunt: Hunt) {
    console.log('about to add hunt');
    hunt.id = 20;
    //this.store.dispatch( { type: 'CREATE_HUNT', payload: hunt });
    //
    //new
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.baseUrl + `hunts`, { 'hunt': hunt }, options)
      .toPromise()
      .then(response => response.json().data as Hunt[])
          .then(payload => ({ type: 'GET_HUNTS', payload}))
          .then(action => this.store.dispatch(action));
  }

  addHunt(hunt: Hunt){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.baseUrl + `hunts`, hunt, options)
    .subscribe(response => response.json());
  }

  getHuntPartners(id: number): Promise<Person[]> {
    console.log('about to get partners');
    const url = `${this.baseUrl}hunt_partners/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => 
      response.json().data as Person[])
    .catch(this.handleError);
  }

  getShotDucks(id: number): Promise<ShotDucks[]> {
    const url = `${this.baseUrl}getDucksForHunt/?huntId=${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response =>
      response.json().data as ShotDucks[])
    .catch(this.handleError);
  }

  // delete(id: number): Promise<void> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.delete(url, {headers: this.headers})
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError);
  // }

  /*create(name: string): Promise<Hero> {
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
  }*/

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