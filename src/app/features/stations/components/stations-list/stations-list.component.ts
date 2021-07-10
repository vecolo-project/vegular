import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Station} from '../../../../shared/models';
import {FormControl} from '@angular/forms';

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
  getSations = new EventEmitter<{ limit: number, offset: number, searchQuery?: string }>();

  @Output()
  viewStation = new EventEmitter<number>();

  displayedColumns = [
    'id',
    'address',
    'status',
    'battery',
    'bikes'
  ];

  pageIndex: number;
  pageSize: number;
  searchQuery: FormControl;


  constructor() {
    this.searchQuery = new FormControl('');
  }

  ngOnInit(): void {
    this.getStationsF(  0, 10);
  }

  onViewStation(station: Station): void {
    this.viewStation.emit(station.id);
  }

  onSearch(): void {
    this.pageIndex = 0;
    this.getStationsF(this.pageIndex, this.pageSize);
  }


  getStationsF(pageIndex: number, pageSize: number): void {
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    setTimeout(() => {
      this.getSations.emit({limit: this.pageSize, offset: this.pageIndex * this.pageSize, searchQuery: this.searchQuery.value});
    });
  }
}
