import { Component, OnInit } from '@angular/core';
import { PeopleInSpaceService } from '../../services';
import { PeopleInSpace } from '../../models';

@Component({
  selector: 'app-people-in-space',
  templateUrl: './people-in-space.component.html',
  styleUrls: ['./people-in-space.component.sass']
})
export class PeopleInSpaceComponent implements OnInit {
  lastKnownPeople: PeopleInSpace;

  constructor(private service: PeopleInSpaceService) { }

  ngOnInit() {
    this.service.getCurrentPeopleInSpace().subscribe(
      (data: PeopleInSpace) => this.lastKnownPeople = new PeopleInSpace(data),
      err => console.log('Error:', err),
      () => console.log('this', this)
    );
  }

}
