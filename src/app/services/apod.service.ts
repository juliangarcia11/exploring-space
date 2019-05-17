import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Apod } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApodService {
  private serviceUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
  private PARAMS = ['date', 'hd', 'api_key'];

  constructor(private http: HttpClient) { }

  getApod(): Observable<Apod> {
    return this.http.get<Apod>(this.serviceUrl);
  }
}

export const MOCK_APODS: Apod[] = [
  new Apod({
    copyright: 'NASA',
    date: '2019-05-17',
    explanation: 'I\'m an explanation! Just shortened...',
    media_type: 'image',
    service_version: 'v1',
    title: 'RS Puppis',
    url: 'https://apod.nasa.gov/apod/image/1905/RSPuppis_Hubble_rba1024.jpg'
  }),
];
