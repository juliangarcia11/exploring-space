import { Component, OnInit } from '@angular/core';

/**
 * The misc landing page for the app. Displays a header, message,
 * and image in a nebular card element
 * Url: <url>/** (any url not matched by the router)
 */

@Component({
  selector: 'app-page-not-found',
  templateUrl: '../_shared/simple-image-card.html',
  styleUrls: ['./page-not-found.component.sass']
})
export class PageNotFoundComponent implements OnInit {
  // fields to be used by the template
  private header = 'Oops.. We\'ve lost you..';
  private message = 'Please use the navigation sidebar to select a page.';
  private imagePath = '../../../assets/green_alien_sad_200px.png';

  constructor() { }
  ngOnInit() { }
}
