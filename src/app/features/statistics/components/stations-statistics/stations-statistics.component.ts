import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StationsStatistics} from '../../../../shared/models';

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

  constructor() {
  }

  ngOnInit(): void {
  }

}
