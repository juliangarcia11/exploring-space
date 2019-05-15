import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IssCurrentLocation } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssCurrentLocationService {
  private serviceUrl = 'http://api.open-notify.org/iss-now.json';

  constructor(private http: HttpClient) { }

  getCurrentLocation(): Observable<IssCurrentLocation> {
    return this.http.get<IssCurrentLocation>(this.serviceUrl);
  }
}
