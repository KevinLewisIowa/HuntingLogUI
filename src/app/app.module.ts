import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HuntListComponent } from './hunt-list/hunt-list.component';
import { HuntDetailComponent } from './hunt-detail/hunt-detail.component';
//import { HeroesComponent }      from './heroes.component';
import { HuntService }          from './hero.service';
import { CreateHuntComponent } from './create-hunt/create-hunt.component';
import { CreateFishComponent } from './create-fish/create-fish.component';
import { PartnerListComponent } from './partner-list/partner-list.component';
import { ShotDuckListComponent } from './shot-duck-list/shot-duck-list.component';
//import { HeroSearchComponent }  from './hero-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HuntListComponent,
    HuntDetailComponent,
    CreateHuntComponent,
    CreateFishComponent,
    PartnerListComponent,
    ShotDuckListComponent
    //HeroSearchComponent
  ],
  providers: [ HuntService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
