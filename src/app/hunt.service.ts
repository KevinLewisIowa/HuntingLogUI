import { Injectable }    from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { Hunt } from './hunt';
import { Person } from './person';
import { ShotDucks } from './shot-duck';
import { Store } from '@ngrx/store';
import { IMainStore } from './state-management/main.store';

const theHeader = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable()
export class HuntService {
  //private heroesUrl = 'api/heroes';  // URL to web api
  //private huntsUrl = 'api/hunts'; //URL to web api
  //private huntPartnersUrl = 'api/huntPartners';
  //private shotDucksUrl = 'api/shotDucks';
  private baseUrl = 'https://rocky-depths-92084.herokuapp.com/';

  constructor(private http: HttpClient, private router: Router, private store: Store<IMainStore>) { }

  getUserByToken(sessionToken: string) {
    this.http.get(this.baseUrl + `getUserByToken?sessionToken=${sessionToken}`)
      .map(payload => {
        console.log('the user response');
        console.log(payload);
        if (payload == null) {
          // redirect
          this.router.navigate(['/login']);
        } else {
          return {type: 'GOTUSER', payload};
        }
      })
      .subscribe(action => this.store.dispatch(action), error => this.handleError(error));
  }

  getHunts(userId){
    return this.http.get(this.baseUrl + `huntsForUser?userId=${userId}`)
          .map(payload => ({ type: 'GET_HUNTS', payload}))
          .subscribe(action => this.store.dispatch(action), error => this.handleError(error));
  }

  getHunt(id: number) : Observable<any>{
    const url = `${this.baseUrl}hunts/${id}`;
    return this.http.get(url)
    .map(response => response)
  }

  addHuntTest(hunt: Hunt) {
    console.log('about to add hunt');
    return this.http.post(this.baseUrl + `hunts`, { 'hunt': hunt }, {headers: theHeader})
              .map(response => response);
  }

  addHunt(hunt: Hunt){
    return this.http.post(this.baseUrl + `hunts`, hunt, {headers: theHeader})
              .map(response => {console.log(response); return response;});
  }

  getHuntPartners(id: number){
    console.log('about to get partners');
    const url = `${this.baseUrl}hunt_partners/${id}`;
    return this.http.get(url)
    .map(response => {console.log(response); return response;});
  }

  getShotDucks(id: number) {
    const url = `${this.baseUrl}getDucksForHunt/?huntId=${id}`;
    return this.http.get(url)
          .map(response => {console.log('ducks'); console.log(response); return response;});
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