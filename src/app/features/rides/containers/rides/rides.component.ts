import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Ride} from '../../../../shared/models';
import {ActivatedRoute, Router} from '@angular/router';
import {RouterNavigation} from '../../../../core/router/router.navigation';
import {RidesService} from '../../store/rides.service';
import {RidesQuery} from '../../store/rides.query';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss']
})
export class RidesComponent implements OnInit {

  rides: Observable<Ride[]>;
  rideCount: Observable<number>;
  viewRide: Observable<Ride>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private routerNavigation: RouterNavigation,
    private ridesService: RidesService,
    private ridesQuery: RidesQuery
  ) {
    this.rides = ridesQuery.selectRidesArray$;
    this.rideCount = ridesQuery.selectCount$;
    this.viewRide = ridesQuery.selectViewRide;
  }

  ngOnInit(): void {
    if (this.isViewRide()) {
      const rideId = Number.parseInt(this.route.snapshot.params.id, 10);
      this.ridesService.getRide(rideId);
    }
  }


  isAddRide(): boolean {
    return this.router.isActive('rides/add', true);
  }

  isListRide(): boolean {
    return this.router.isActive('rides', true);
  }

  isViewRide(): boolean {
    return this.router.isActive('rides/view', false);
  }

  onGetRides(limit: number, offset: number, searchQuery?: string): void {
    this.ridesService.getRides(limit, offset, searchQuery);
  }

  onPostRide(ride: Ride): void {
    this.ridesService.createRide(ride);
  }

  onPutRide(ride: Ride): void {
    this.ridesService.updateRide(ride);
  }

  onDeleteRide(rideId: number): void {
    this.ridesService.deleteRide(rideId);
  }

  onViewRide(rideId: number): void {
    this.ridesQuery.setViewRide(rideId);
    this.routerNavigation.gotoRideView(rideId);
  }

}
