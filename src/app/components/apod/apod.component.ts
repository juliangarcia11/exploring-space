import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../services';
import { Apod } from '../../models';
import {NbDateService} from '@nebular/theme';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.sass']
})
export class ApodComponent implements OnInit {
  private apods: Apod[] = [];
  private startDate: Date;
  private endDate: Date;
  private dateMin: Date;
  private dateMax: Date;

  constructor(
    private service: ApodService,
    private dateService: NbDateService<Date>
    ) {
    this.dateMax = this.dateService.today();
    this.dateMin = this.dateService.parse('06-20-1995', 'MM\\dd\\yyyy');
  }

  ngOnInit() {
    this.service.getApod().subscribe(
      (data: Apod) => this.apods.push(new Apod(data)),
      err => console.log('Error:', err),
      () => console.log('this', this)
    );
  }

  public setStartDate(date: Date): void {
    this.startDate = new Date(date);
  }

  public setEndDate(date: Date): void {
    this.endDate = new Date(date);
  }

  public requestApod(): void {
    // TODO Do we want to have two date pickers so that we can do all APODs from start until Today and then also
    // TODO yes. writing this functionallity will assist us in what we need to do later too
    const helper = {
      'this': this
    };
    console.log('HELPER', helper);
  }
}

