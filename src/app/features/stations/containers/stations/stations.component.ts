import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Station, StationMonitoring} from "../../../../shared/models";
import {StationsQuery} from "../../store/stations.query";
import {StationsService} from "../../store/stations.service";
import {subDays} from "date-fns";
import {OsmSearchResponse} from "../../../../shared/models/osmSearchResponse";
import {RouterNavigation} from "../../../../core/router/router.navigation";

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {

  viewStation: Observable<Station>;
  stationList: Observable<Station[]>;
  stationCount: Observable<number>;
  stationMonitorings: Observable<StationMonitoring[]>;
  addressResultSearch: Observable<OsmSearchResponse[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routerNavigation: RouterNavigation,
    public stationsService: StationsService,
    private stationsQuery: StationsQuery
  ) {
    this.viewStation = this.stationsQuery.selectViewStation$;
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

  isListMode(): boolean {
    return this.router.isActive('/stations', true);
  }

  onSelect(value: any) {
    console.log(value);
  }

  getStations(limit: number, offset: number): void {
    this.stationsService.getStations(limit, offset);
  }

  onViewStation(stationId: number) {
    this.stationsQuery.setViewStation(stationId);
    this.routerNavigation.gotoStationView(stationId);
  }

}
