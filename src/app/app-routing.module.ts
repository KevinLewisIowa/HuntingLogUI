import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HuntDetailComponent } from './hunt-detail/hunt-detail.component';
import { CreateHuntComponent } from './create-hunt/create-hunt.component';
import { CreateFishComponent } from './create-fish/create-fish.component';
import { LoginComponent } from "app/login/login.component";

const routes: Routes = [
   
   { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HuntDetailComponent },
  { path: 'addHunt', component: CreateHuntComponent },
  { path: 'addFish', component: CreateFishComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
