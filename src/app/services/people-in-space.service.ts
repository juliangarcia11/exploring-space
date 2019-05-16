import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeopleInSpace } from '../models/';

@Injectable({
  providedIn: 'root'
})
export class PeopleInSpaceService {
  private serviceUrl = 'http://api.open-notify.org/astros.json';

  constructor(private http: HttpClient) { }

  getCurrentPeopleInSpace(): Observable<PeopleInSpace> {
    return this.http.get<PeopleInSpace>(this.serviceUrl);
  }
}

export const MOCK_PEOPLE_IN_SPACE = [
  { "message": "success", "number": 6, "people":
      [
        { "craft": "ISS", "name": "Oleg Kononenko" },
        { "craft": "ISS", "name": "David Saint-Jacques" },
        { "craft": "ISS", "name": "Anne McClain" },
        { "craft": "ISS", "name": "Alexey Ovchinin" },
        { "craft": "ISS", "name": "Nick Hague" },
        { "craft": "ISS", "name": "Christina Koch" }
      ]
  }
];
