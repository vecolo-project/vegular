import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Bike, OsmSearchResponse, Ride, Station, StationMonitoring} from '../../../../shared/models';
import {StationsQuery} from '../../store/stations.query';
import {StationsService} from '../../store/stations.service';
import {subDays} from 'date-fns';
import {RouterNavigation} from '../../../../core/router/router.navigation';
import {SessionQuery} from '../../../../core/store/session.query';
import {BikeService} from '../../../bikes/store/bike/bike.service';
import {BikeQuery} from '../../../bikes/store/bike/bike.query';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {

  viewStation: Observable<Station>;
  viewStationToken: Observable<string>;
  viewStationBikes: Observable<Bike[]>;
  viewStationBikesCount: Observable<number>;
  stationList: Observable<Station[]>;
  stationCount: Observable<number>;
  rideList: Observable<Ride[]>;
  rideCount: Observable<number>;
  stationMonitorings: Observable<StationMonitoring[]>;
  addressResultSearch: Observable<OsmSearchResponse[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routerNavigation: RouterNavigation,
    public stationsService: StationsService,
    private bikeService: BikeService,
    private bikeQuery: BikeQuery,
    private stationsQuery: StationsQuery,
    public sessionQuery: SessionQuery
  ) {
    this.viewStation = this.stationsQuery.selectViewStation$;
    this.viewStationToken = this.stationsQuery.selectViewStationToken$;
    this.addressResultSearch = this.stationsQuery.selectAdressSearchResult$;
    this.stationMonitorings = this.stationsQuery.selectViewStationMonitoring$;
    this.stationList = this.stationsQuery.selectStationsArray$;
    this.stationCount = this.stationsQuery.selectCount$;
    this.viewStationBikes = this.bikeQuery.selectBikeArray$;
    this.viewStationBikesCount = this.bikeQuery.selectCount$;
    this.rideList = this.stationsQuery.selectViewStationRides$;
    this.rideCount = this.stationsQuery.selectViewStationRidesCount$;
  }

  ngOnInit(): void {
    if (this.isViewMode()) {
      const stationId = Number.parseInt(this.route.snapshot.params.id, 10);
      this.stationsService.getStation(stationId);
      const now = new Date();
      this.retrieveMonitoring(stationId, now, subDays(now, 3));
    }
  }

  retrieveMonitoring(stationId: number, start: Date, end: Date): void {
    this.stationsService.getStationMonitoring(stationId, start, end);
  }

  isViewMode(): boolean {
    return this.router.isActive('/stations/view', false);
  }

  isCreateMode(): boolean {
    return this.router.isActive('/stations/add', true);
  }

  isListMode(): boolean {
    return this.router.isActive('/stations', true);
  }

  getStations(limit: number, offset: number, searchQuery?: string): void {
    this.stationsService.getStations(limit, offset, searchQuery);
  }

  getBikes(stationId: number, limit: number, offset: number): void {
    this.bikeService.getBikeFromStation(stationId, limit, offset);
  }

  getRides(stationId: number, limit: number, offset: number): void {
    this.stationsService.getRides(stationId, limit, offset);
  }

  onViewStation(stationId: number): void {
    this.stationsQuery.setViewStation(stationId);
    this.routerNavigation.gotoStationView(stationId);
  }

  onCreateStationSubmit(station: Station): void {
    this.stationsService.createStation(station);
  }

  onUpdateStationSubmit(station: Station): void {
    this.stationsService.updateStation(station);
  }

  onDeleteStationSubmit(stationId: number): void {
    this.stationsService.deleteStation(stationId);
  }

  getStationToken(stationId: number): void {
    this.stationsService.getStationToken(stationId);
  }

}
