import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {StationMonitoring} from "../../../../shared/models";
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Color, Label, PluginServiceGlobalRegistrationAndOptions,} from "ng2-charts";
import {addHours, format} from 'date-fns';

@Component({
  selector: 'app-station-battery-chart',
  templateUrl: './station-battery-chart.component.html',
  styleUrls: ['./station-battery-chart.component.scss']
})
export class StationBatteryChartComponent implements OnInit, OnChanges {
  @Input()
  stationMonitorings: StationMonitoring[];


  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions: ChartOptions = {
    responsive: true,
    defaultColor: '#fefefe',
    scales: {
      yAxes: [{
        ticks: {
          fontColor: "#fefefe",
          fontSize: 14,
          stepSize: 1,
          beginAtZero: true
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: "#fefefe",
          fontSize: 14,
          stepSize: 1,
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
  ];

  lineChartLegend = true;
  lineChartPlugins: PluginServiceGlobalRegistrationAndOptions[] = [];
  lineChartType: ChartType = 'line';

  constructor() {
  }

  ngOnInit(): void {
    this.computeChart()
  }

  ngOnChanges(): void {
    this.computeChart();
  }


  private computeChart() {
    const moduloFilter = this.stationMonitorings.length > 500 ? Math.round(this.stationMonitorings.length / 500) : 1;
    this.lineChartData = [
      {
        data: this.stationMonitorings.filter((value, index) => index % moduloFilter === 0).map(m => m.batteryPercent),
        label: 'Batterie de la station',
        spanGaps: true,
      }
    ]
    this.lineChartLabels = this.stationMonitorings.filter((value, index) => index % moduloFilter === 0).map(m => format(addHours(new Date(m.createdAt), 2), 'yyyy-MM-dd HH:mm:ss'));
  }
}
