import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../services';
import { Apod } from '../../models';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.sass']
})
export class ApodComponent implements OnInit {
  private apods: Apod[] = [];

  constructor(private service: ApodService) { }

  ngOnInit() {
    this.service.getApod().subscribe(
      (data: Apod) => this.apods.push(new Apod(data)),
      err => console.log('Error:', err),
      () => console.log('this', this)
    );
  }

}
