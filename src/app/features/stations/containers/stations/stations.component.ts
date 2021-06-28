import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Station, StationMonitoring} from "../../../../shared/models";
import {StationsQuery} from "../../store/stations.query";
import {StationsService} from "../../store/stations.service";
import {subDays} from "date-fns";
import {OsmSearchResponse} from "../../../../shared/models/osmSearchResponse";
import {RouterNavigation} from "../../../../core/router/router.navigation";
import {SessionQuery} from "../../../../core/store/session.query";

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {

  viewStation: Observable<Station>;
  viewStationToken: Observable<string>;
  stationList: Observable<Station[]>;
  stationCount: Observable<number>;
  stationMonitorings: Observable<StationMonitoring[]>;
  addressResultSearch: Observable<OsmSearchResponse[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routerNavigation: RouterNavigation,
    public stationsService: StationsService,
    private stationsQuery: StationsQuery,
    public sessionQuery: SessionQuery
  ) {
    this.viewStation = this.stationsQuery.selectViewStation$;
    this.viewStationToken = this.stationsQuery.selectViewStationToken$;
    this.addressResultSearch = this.stationsQuery.selectAdressSearchResult$;
    this.stationMonitorings = this.stationsQuery.selectViewStationMonitoring$;
    this.stationList = this.stationsQuery.selectStationsArray$;
    this.stationCount = this.stationsQuery.selectCount$;
  }

  ngOnInit(): void {
    if (this.isViewMode()) {
      const stationId = Number.parseInt(this.route.snapshot.params.id);
      this.stationsService.getStation(stationId);
      this.retrieveMonitoring(stationId, 3);
    }
  }

  retrieveMonitoring(stationId: number, nbDays: number) {
    const now = new Date();
    const dayAgo = subDays(now, nbDays);
    this.stationsService.getStationMonitoring(stationId, dayAgo, now);
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

  getStations(limit: number, offset: number): void {
    this.stationsService.getStations(limit, offset);
  }

  onViewStation(stationId: number) {
    this.stationsQuery.setViewStation(stationId);
    this.routerNavigation.gotoStationView(stationId);
  }

  onCreateStationSubmit(station: Station) {
    this.stationsService.createStation(station);
  }

  onUpdateStationSubmit(station: Station) {
    this.stationsService.updateStation(station);
  }

  getStationToken(stationId: number) {
    this.stationsService.getStationToken(stationId);
  }

}
