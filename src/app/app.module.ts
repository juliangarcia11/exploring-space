import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbCardModule } from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { InfoCardsComponent } from './components/info-cards/info-cards.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { PeopleInSpaceComponent } from './components/people-in-space/people-in-space.component';
import { ApodComponent } from './components/apod/apod.component';
import { IssCurrentLocationComponent } from './components/iss-current-location/iss-current-location.component';

// Services
import { IssCurrentLocationService } from './services';

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
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule
  ],
  providers: [
    // services
    IssCurrentLocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
