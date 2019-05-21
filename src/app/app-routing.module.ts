import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApodComponent } from './components/apod/apod.component';
import { IssCurrentLocationComponent } from './components/iss-current-location/iss-current-location.component';
import { PeopleInSpaceComponent } from './components/people-in-space/people-in-space.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'apod', component: ApodComponent },
  { path: 'iss-current-location', component: IssCurrentLocationComponent },
  { path: 'people-in-space', component: PeopleInSpaceComponent },

  // TODO PageNotFoundComponent
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
