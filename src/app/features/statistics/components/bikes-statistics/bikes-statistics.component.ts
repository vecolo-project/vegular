import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {BikesStatistics} from '../../../../shared/models';
import {ChartOptions, ChartType} from 'chart.js';
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet} from 'ng2-charts';

@Component({
  selector: 'app-bikes-statistics',
  templateUrl: './bikes-statistics.component.html',
  styleUrls: ['./bikes-statistics.component.scss']
})
export class BikesStatisticsComponent implements OnInit, OnChanges {

  @Input()
  statistics: BikesStatistics[];

  @Output()
  retrieveStatistics = new EventEmitter<void>();

  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: '#fefefe'
      },
    }
  };
  pieChartData: SingleDataSet;
  chartType: ChartType = 'pie';
  pieChartLegend = true;
  public pieChartLabels: Label[];

  pieChartColors: Array<any> = [{
    backgroundColor: ['rgba(135,206,250)', 'rgb(106,90,205)', 'rgb(23,50,94)', 'rgb(6,111,38)'],
    borderColor: ['rgb(62,63,68)', 'rgb(62,63,68)', 'rgb(62,63,68)', 'rgb(62,63,68)', 'rgb(62,63,68)']
  }];

  bikeCount = 0;

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.computeChartData();
  }

  ngOnChanges(): void {
    this.computeChartData();
  }

  computeChartData(): void {
    this.pieChartData = this.statistics?.map(bikeStatistic => bikeStatistic.total);
    this.pieChartLabels = this.statistics?.map(bikeStatistic => bikeStatistic.status);
    this.bikeCount = this.statistics?.reduce((acc, st) => acc + Number(st.total), 0);
  }
}
