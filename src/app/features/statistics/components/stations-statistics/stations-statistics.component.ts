import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StationsStatistics} from '../../../../shared/models';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-stations-statistics',
  templateUrl: './stations-statistics.component.html',
  styleUrls: ['./stations-statistics.component.scss']
})
export class StationsStatisticsComponent implements OnInit {

  @Input()
  statistics: StationsStatistics;

  @Output()
  refreshData = new EventEmitter<void>();

  lottieStationOptions: AnimationOptions = {
    path: 'assets/lottie/solarPanel2.json',
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
