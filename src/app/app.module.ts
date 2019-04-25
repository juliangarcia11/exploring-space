import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoCardsComponent } from './info-cards/info-cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule } from '@nebular/theme';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { PeopleInSpaceComponent } from './people-in-space/people-in-space.component';
import { ApodComponent } from './apod/apod.component';
import { IssCurrentLocationComponent } from './iss-current-location/iss-current-location.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoCardsComponent,
    SidebarNavComponent,
    PeopleInSpaceComponent,
    ApodComponent,
    IssCurrentLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
