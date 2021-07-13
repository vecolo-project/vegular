import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {RidesStatistics} from '../../../../shared/models';
import {FormControl} from '@angular/forms';
import {MatDatepicker} from '@angular/material/datepicker';
import {getMonth, getYear, startOfMonth} from 'date-fns';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label, PluginServiceGlobalRegistrationAndOptions} from 'ng2-charts';

@Component({
  selector: 'app-rides-statistics',
  templateUrl: './rides-statistics.component.html',
  styleUrls: ['./rides-statistics.component.scss']
})
export class RidesStatisticsComponent implements OnInit, OnChanges {

  @Input()
  statistics: RidesStatistics[];

  @Output()
  retrieveStatistics = new EventEmitter<{ month: number, year: number }>();

  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions: ChartOptions = {
    responsive: true,
    defaultColor: '#fefefe',
    scales: {
      yAxes: [{
        ticks: {
          fontColor: '#fefefe',
          fontSize: 14,
          stepSize: 1,
          beginAtZero: true,
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: '#fefefe',
          fontSize: 14,
          // stepSize: 1,
          beginAtZero: true
        }
      }]
    },
    legend: {
      labels: {
        fontColor: '#fefefe'
      },
    }
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0,255,4,0.28)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(2,212,252,0.28)',
    },
  ];
  lineChartLegend = true;
  lineChartType: ChartType = 'line';

  date = new FormControl(startOfMonth(new Date()));

  constructor() {
  }

  ngOnChanges(): void {
    this.computeChart();
  }

  ngOnInit(): void {
    this.computeChart();
  }

  chosenMonthHandler(date: Date, datePicker: MatDatepicker<any>): void {
    this.retrieveStatistics.emit({
      month: getMonth(date) + 1,
      year: getYear(date)
    });
    datePicker.close();
  }

  computeChart(): void {
    this.lineChartData = [
      {
        data: this.statistics?.map(r => r.totalRide),
        label: 'Nombre de courses',
        spanGaps: true
      },
      {
        data: this.statistics?.map(r => r.totalLength / 1000),
        label: 'Distance parcourue (km)',
        spanGaps: true
      },
      {
        data: this.statistics?.map(r => r.totalDuration),
        label: 'Durée totale des trajets (min)',
        spanGaps: true
      }
    ];
    console.log(this.lineChartData);

    this.lineChartLabels = this.statistics?.map(r => r.day + '/' + (getMonth(this.date.value) + 1));
  }
}
