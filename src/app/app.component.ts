import { Component , OnInit}          from '@angular/core';
import { HuntListComponent } from './hunt-list/hunt-list.component';
import { Store } from "@ngrx/store";
import { IMainStore } from "app/state-management/main.store";
import { HuntService } from "app/hunt.service";

@Component({
  selector: 'app-root',
  template: `
  <header class="text-center" style="margin-top:-20px;margin-bottom:10px;background:white; opacity:0.7; width:100%;">
    <nav>
    <h1 class="navbar-brand">{{title}}</h1>&nbsp;
      <ul class="nav nav-pills">
        <li><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></li>
        <li><a routerLink="/addHunt" routerLinkActive="active">Add Hunt</a></li>
        <li><a routerLink="/addFish" routerLinkActive="active">Add Fish Trip</a></li>
      </ul>
    </nav>
  </header>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  <footer class="text-right" style="padding-right:30px; background:white;width:100%;opacity:0.8;">
    Kevin Lewis Inc. 2017
    </footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hunting Log';

  constructor(private store: Store<IMainStore>, private huntService: HuntService) {
    
  }

  ngOnInit() {
    const sessionToken = window.sessionStorage.getItem('sessionToken');

    if (sessionToken == null) {
      // redirect to login / create user screen
    } else {
      // call api to get user info
    }
  }
}
