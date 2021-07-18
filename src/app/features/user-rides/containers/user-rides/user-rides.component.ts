import {Component, OnInit} from '@angular/core';
import UserRideQuery from "../../store/user-ride.query";
import {UserRideService} from "../../store/user-ride.service";
import {Bike, Ride, Station} from "../../../../shared/models";
import {Observable} from "rxjs";
import {BikeQuery} from "../../../bikes/store/bike/bike.query";
import {BikeService} from "../../../bikes/store/bike/bike.service";

@Component({
  selector: 'app-rides',
  templateUrl: './user-rides.component.html',
  styleUrls: ['./user-rides.component.scss']
})
export class UserRidesComponent implements OnInit {

  currentRide: Observable<Ride>;
  bikes: Observable<Bike[]>;

  constructor(private userRideQuery: UserRideQuery,
              private userRideService: UserRideService,
              private bikeQuery: BikeQuery,
              private bikeService: BikeService) {
    this.currentRide = userRideQuery.selectCurrentRide$;
    this.bikes = bikeQuery.selectBikeArray$
  }

  ngOnInit(): void {
    this.userRideService.getCurrentRide();
  }

  onSelectStation(station: Station): void {
    this.bikeService.getBikeFromStation(station.id, 9999, 0);
  }

  onSubmitStartRide(ride: Ride): void {
    this.userRideService.startRide(ride.bike, ride.startStation)
  }

  onSubmitEndRide(ride: Ride): void {
    const currentRide = this.userRideQuery.getValue().currentRide;
    this.userRideService.endRide(currentRide, ride.endStation, ride.rideLength);
  }

}
