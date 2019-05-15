import { Component, OnInit } from '@angular/core';
import { IssCurrentLocationService } from '../../services';
import { IssCurrentLocation } from '../../models';

@Component({
  selector: 'app-iss-current-location',
  templateUrl: './iss-current-location.component.html',
  styleUrls: ['./iss-current-location.component.sass']
})
export class IssCurrentLocationComponent implements OnInit {
  private lastKnownLocation: IssCurrentLocation;

  constructor(private service: IssCurrentLocationService) { }

  ngOnInit() {
    this.service.getCurrentLocation().subscribe(
      (data: IssCurrentLocation) => this.lastKnownLocation = new IssCurrentLocation(data),
      err => console.log('Error:', err),
      () => console.log('this', this)
    );
  }
}
