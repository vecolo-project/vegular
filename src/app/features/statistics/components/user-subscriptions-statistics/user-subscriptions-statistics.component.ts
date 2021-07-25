import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDatepicker} from '@angular/material/datepicker';
import {getMonth, getYear, startOfMonth} from 'date-fns';
import {FormControl} from '@angular/forms';
import {UserSubscriptionsStatistics} from '../../../../shared/models';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-user-subscriptions-statistics',
  templateUrl: './user-subscriptions-statistics.component.html',
  styleUrls: ['./user-subscriptions-statistics.component.scss']
})
export class UserSubscriptionsStatisticsComponent implements OnInit {

  @Input()
  statistics: UserSubscriptionsStatistics;

  @Output()
  retrieveStatistics = new EventEmitter<{ month: number, year: number }>();

  lottieUserOptions: AnimationOptions = {
    path: 'assets/lottie/user_2.json',
  };

  date = new FormControl(startOfMonth(new Date()));

  constructor() {
  }

  ngOnInit(): void {
  }

  onRetrieveStatistics(): void {
    this.retrieveStatistics.emit();
  }

  chosenMonthHandler(date: Date, datePicker: MatDatepicker<any>): void {
    this.retrieveStatistics.emit({
      month: getMonth(date) + 1,
      year: getYear(date)
    });
    datePicker.close();
    this.date.patchValue(date);
  }

}
