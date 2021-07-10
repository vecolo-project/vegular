import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Station} from '../../../../shared/models';

@Component({
  selector: 'app-stations-list',
  templateUrl: './stations-list.component.html',
  styleUrls: ['./stations-list.component.scss']
})
export class StationsListComponent implements OnInit {

  @Input()
  stationList: Station[];

  @Input()
  stationCount: number;

  @Output()
  getSations = new EventEmitter<{ limit: number, offset: number }>();

  @Output()
  viewStation = new EventEmitter<number>();

  displayedColumns = [
    'id',
    'address',
    'status',
    'battery',
    'bikes'
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.getStationsF(10, 0);
  }

  onViewStation(station: Station): void {
    this.viewStation.emit(station.id);
  }

  getStationsF(limit: number, offset: number): void {
    setTimeout(() => {
      this.getSations.emit({limit, offset});
    });
  }
}
