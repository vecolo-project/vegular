import {Component, OnInit} from '@angular/core';
import {Station} from '../../../../shared/models';
import {Observable} from 'rxjs';
import {StationsQuery} from '../../../stations/store/stations.query';
import {StationsService} from '../../../stations/store/stations.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  stations: Observable<Station[]>;

  constructor(private stationsService: StationsService,
              private stationsQuery: StationsQuery) {
    this.stations = stationsQuery.selectStationsArray$;
  }

  ngOnInit(): void {
    this.stationsService.getStations(300, 0);
  }

}
