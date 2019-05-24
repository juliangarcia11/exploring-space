import { Component, OnInit } from '@angular/core';

/**
 * The main landing page for the app. Displays a header, message,
 * and image in a nebular card element
 * Url: <url> || <url>/home
 */

@Component({
  selector: 'app-home',
  templateUrl: '../_shared/simple-image-card.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  // fields to be used by the template
  private header = 'Welcome to Outer Space';
  private imagePath = '../../../assets/green_alien_ahh_200px.png';
  private message: string;

  ngOnInit() {
    this.message = 'Gathered here is a collection of outer space themed data. ';
    this.message += 'Please use the navigation sidebar to select a page.';
  }
}
