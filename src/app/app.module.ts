import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbCardModule,
  NbButtonModule,
  NbDatepickerModule
} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { RouterSidebarComponent } from './components/ui-elements/router-sidebar/router-sidebar.component';
import { PeopleInSpaceComponent } from './components/people-in-space/people-in-space.component';
import { ApodComponent } from './components/apod/apod.component';
import { IssCurrentLocationComponent } from './components/iss-current-location/iss-current-location.component';

// Services
import { IssCurrentLocationService, PeopleInSpaceService } from './services';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ButtonGroupComponent } from './components/ui-elements/button-group/button-group.component';

@NgModule({
  declarations: [
    AppComponent,
    RouterSidebarComponent,
    PeopleInSpaceComponent,
    ApodComponent,
    IssCurrentLocationComponent,
    HomeComponent,
    ButtonGroupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'cosmic'}), // default, cosmic, corporate
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbButtonModule,
    NbDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [
    // services
    IssCurrentLocationService,
    PeopleInSpaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
