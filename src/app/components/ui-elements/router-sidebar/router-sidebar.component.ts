import { Component, OnInit } from '@angular/core';

/**
 * The Controller for the RouterSidebarComponent
 */

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './router-sidebar.component.html',
  styleUrls: ['./router-sidebar.component.sass']
})
export class RouterSidebarComponent implements OnInit {

  // Add a new object to the array for each new nav item (follow the example)
  items = [
    {
      title: 'Home',
      link: ['home'],
      icon: 'fa fa-home'
    },
    {
      title: 'APOD',
      link: ['apod'],
      icon: 'fa fa-camera'
    },
    {
      title: 'ISS Current Location',
      link: ['iss-current-location'],
      icon: 'fa fa-rocket'
    },
    {
      title: 'People In Space',
      link: ['people-in-space'],
      icon: 'fa fa-user-friends'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
