import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Apod } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApodService {
  private apiKey = '9poEouZ0VjjQo8ieQF00djY57RnRdjKdEZ7C52vr';
  private serviceUrl = 'https://api.nasa.gov/planetary/apod';
  private PARAMS = ['date', 'hd', 'api_key'];
  private requestOptions: string;

  constructor(private http: HttpClient) { }

  /**
   * Fires off a request to the Service's API after forming the request options properly
   * @param options Can include: 'date'
   */
  getApod(options?: {}): Observable<Apod> {
    // clear out any left over options from the last request
    this.requestOptions = '?api_key=' + this.apiKey;

    // check for the date request param
    if (options && options['date'] && options['date'].length > 0) {
      this.requestOptions += '&date=' + options['date'];
    }

    return this.http.get<Apod>(this.serviceUrl + this.requestOptions);
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
