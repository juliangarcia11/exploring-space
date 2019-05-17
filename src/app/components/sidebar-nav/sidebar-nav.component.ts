import { Component, OnInit } from '@angular/core';

/**
* The Controller for the SidebarNavComponent
*/

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.sass']
})
export class SidebarNavComponent implements OnInit {

  // Add a new object to the array for each new nav item (follow the example)
  items = [
    // { // TODO after api key
    //   title: 'APOD',
    //   link: ['apod']
    //   // url: ["https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"],
    // },
    {
      title: 'ISS Current Location',
      link: ['iss-current-location'],
    },
    {
      title: 'People In Space',
      link: ['people-in-space']
    }
    // EXAMPLE
    // {
    //   title: 'Change Password',
    //   link: ['change-password'], // link using the project router
    //   url: ["https://google.com], // hyperlink
    // },
  ];

  constructor() { }

  ngOnInit() {
  }

}
