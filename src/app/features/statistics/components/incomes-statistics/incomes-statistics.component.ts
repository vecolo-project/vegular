import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IncomeStatistics} from '../../../../shared/models';
import {getMonth, getYear, startOfMonth} from 'date-fns';
import {FormControl} from '@angular/forms';
import {MatDatepicker} from '@angular/material/datepicker';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-incomes-statistics',
  templateUrl: './incomes-statistics.component.html',
  styleUrls: ['./incomes-statistics.component.scss']
})
export class IncomesStatisticsComponent implements OnInit {

  @Input()
  statistics: IncomeStatistics;

  @Output()
  retrieveStatistics = new EventEmitter<{ month: number, year: number }>();

  date = new FormControl(startOfMonth(new Date()));

  lottieMoneyOptions: AnimationOptions = {
    path: 'assets/lottie/money_2.json',
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  chosenMonthHandler(date: Date, datePicker: MatDatepicker<any>): void {
    this.retrieveStatistics.emit({
      month: getMonth(date) + 1,
      year: getYear(date)
    });
    datePicker.close();
  }


}
