import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Station} from '../models';
import {FormControl, Validators} from '@angular/forms';
import {StationsService} from '../../features/stations/store/stations.service';
import {StationsQuery} from '../../features/stations/store/stations.query';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-station-search',
  templateUrl: './station-search.component.html',
  styleUrls: ['./station-search.component.scss']
})
export class StationSearchComponent implements OnInit, OnChanges {

  stationSearchResult: Observable<Station[]>;

  @Input()
  initialValue: Station;

  @Input()
  label: string;

  @Output()
  searchEvent = new EventEmitter<string>();

  @Output()
  stationSelectEvent = new EventEmitter<Station>();

  searchDebounce;
  inputSearchControl = new FormControl('', Validators.required);

  constructor(private stationsService: StationsService, private stationsQuery: StationsQuery) {
    this.stationSearchResult = stationsQuery.selectStationsArray$;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.initialValue) {
      this.inputSearchControl.patchValue(`Station ${this.initialValue.id}: ${this.initialValue?.streetNumber} ${this.initialValue?.streetName} ${this.initialValue?.city.toUpperCase()} (${this.initialValue?.zipcode})`);
    }
  }

  ngOnInit(): void {
    if (this.initialValue) {
      this.inputSearchControl.patchValue(`Station ${this.initialValue.id}: ${this.initialValue?.streetNumber} ${this.initialValue?.streetName} ${this.initialValue?.city.toUpperCase()} (${this.initialValue?.zipcode})`);
    }
  }

  search(): void {
    this.searchEvent.emit(this.inputSearchControl.value);
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => {
      this.stationsService.getStations(10, 0, this.inputSearchControl.value);
    }, 500);
  }

  onSelectStation(station: Station): void {
    this.inputSearchControl.patchValue(`Station ${station.id}: ${station?.streetNumber} ${station?.streetName} ${station?.city.toUpperCase()} (${station?.zipcode})`);
    this.stationSelectEvent.emit(station);
  }
}
