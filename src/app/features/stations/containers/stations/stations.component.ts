import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Station} from "../../../../shared/models";
import {StationsQuery} from "../../store/stations.query";
import {StationsService} from "../../store/stations.service";

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {

  viewStation: Observable<Station>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stationsService: StationsService,
    private stationsQuery: StationsQuery
  ) {
  }

  ngOnInit(): void {
    this.viewStation = this.stationsQuery.selectViewStation$;

    if (this.isViewMode()) {
      const stationId = this.route.snapshot.params.id;
      this.stationsService.getStation(stationId);
    }
  }

  isViewMode(): boolean {
    return this.router.isActive('/stations/view', false);
  }

  isListMode(): boolean {
    return this.router.isActive('/stations', true);
  }

}
