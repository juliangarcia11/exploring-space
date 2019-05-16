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

export const MOCK_ISS_LOCATIONS = [
  { message: 'success', timestamp: 1558041176, iss_position: {latitude: '49.2990', longitude: '77.1637'}},
  { message: 'success', timestamp: 1558041285, iss_position: {latitude: '46.6979', longitude: '86.5573'}},
  { message: 'success', timestamp: 1558041327, iss_position: {latitude: '45.4836', longitude: '89.9036'}},
  { message: 'success', timestamp: 1558041386, iss_position: {latitude: '43.6380', longitude: '94.2705'}},
  { message: 'success', timestamp: 1558041408, iss_position: {latitude: '42.8740', longitude: '95.8864'}},
];
