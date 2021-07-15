import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SessionQuery} from './core/store/session.query';
import {Ride} from "./shared/models";
import {Observable} from "rxjs";
import UserRideQuery from "./features/user-rides/store/user-ride.query";
import {UserRideService} from "./features/user-rides/store/user-ride.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Vecolo';

  currentRide: Observable<Ride>

  constructor(private sessionQuery: SessionQuery,
              private userRideService: UserRideService,
              private userRideQuery: UserRideQuery,
              private router: Router) {
    this.currentRide = this.userRideQuery.selectCurrentRide$;
  }

  ngOnInit(): void {
    if (this.sessionQuery.isLoggedIn()) {
      this.userRideService.getCurrentRide();
    }

  }

  getClass(): string {
    if (!this.router.isActive('/home', false)) {
      return 'container mx-auto px-2';
    }
  }
}
