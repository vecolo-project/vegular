import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Station, StationMonitoring} from "../../../../shared/models";
import {StationsQuery} from "../../store/stations.query";
import {StationsService} from "../../store/stations.service";
import {subDays} from "date-fns";
import {OsmSearchResponse} from "../../../../shared/models/osmSearchResponse";

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {

  viewStation: Observable<Station>;
  stationMonitorings: Observable<StationMonitoring[]>;
  addressResultSearch: Observable<OsmSearchResponse[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public stationsService: StationsService,
    private stationsQuery: StationsQuery
  ) {
  }

  ngOnInit(): void {
    this.viewStation = this.stationsQuery.selectViewStation$;
    this.addressResultSearch = this.stationsQuery.selectAdressSearchResult$;
    this.stationMonitorings = this.stationsQuery.selectViewStationMonitoring$;
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

}
