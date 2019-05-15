import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApodComponent } from './components/apod/apod.component';
import { IssCurrentLocationComponent } from './components/iss-current-location/iss-current-location.component';
import { PeopleInSpaceComponent } from './components/people-in-space/people-in-space.component';

const routes: Routes = [
  { path: 'apod', component: ApodComponent },
  { path: 'iss-current-location', component: IssCurrentLocationComponent },
  { path: 'people-in-space', component: PeopleInSpaceComponent },

  // EXAMPLE
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
