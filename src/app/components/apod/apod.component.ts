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
  private VIEWTYPES = {day: 'day', week: 'week', month: 'month'};
  private loading: boolean;
  private apods: Apod[] = [];
  private date: Date;
  private dateMin: Date;
  private dateMax: Date;
  private dateInput: any;
  private viewType: string;
  private displayBtnGroup: Btn[] = [];

  constructor(
    private service: ApodService,
    private dateService: NbDateService<Date>
    ) {
    this.loading = true;
    this.dateMax = this.dateService.today();
    this.dateMin = this.dateService.parse('06-20-1995', 'MM\\dd\\yyyy');
    this.viewType = 'day';

    this.displayBtnGroup = [
      {label: this.VIEWTYPES.day, icon: 'fa fa-calendar'},
      {label: this.VIEWTYPES.week, icon: 'fa fa-calendar-week'},
      {label: this.VIEWTYPES.month, icon: 'fa fa-calendar-alt'},
    ];
  }

  ngOnInit() {
    // get today's APOD and render the component
    this.requestApod();
  }

  /**
   * Set the date of the APOD to request
   * @param date Date
   */
  public setDate(date: Date): void {
    this.date = new Date(date);
  }

  /**
   * Triggered via the 'Go' button, fires off a request to the api
   * If the user has selected a date, the APOD of that date will be requested
   * By default, the service returns today's APOD to be added to the component's view
   */
  public requestApod(): void {
    // gather request options to pass on to the service
    let reqOptions = {date: ''};
    if (this.date) {
      reqOptions.date = this.dateService.format(this.date, 'yyyy-MM-dd');
    }

    // use the service to ask the api for the APOD data
    this.service.getApod(reqOptions).subscribe(
      (data: Apod) => this.apods.unshift(new Apod(data)), // display the data on return
      err => console.log('Error:', err), // or log the error TODO: toast error popup
      () => {
        // finally, reset view params to get ready for the next request
        this.dateInput = null;
        this.loading = false;
      }
    );
  }

  /**
   * Triggered by one of the `Day/Week/Month` buttons
   * Swaps the view to a known view or leaves it as is
   * @param viewType
   */
  public changeView(viewType: string): void {
    this.viewType = this.VIEWTYPES[viewType] ? this.VIEWTYPES[viewType] : this.viewType;
  }
}

interface Btn {
  label: string;
  icon: string; // class to be applied to the <i> tag
}
