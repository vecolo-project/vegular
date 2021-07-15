import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {SessionQuery} from 'src/app/core/store/session.query';
import {EditedPassword, EditUser, Invoice, Plan, Ride, Subscription, User} from 'src/app/shared/models';
import ProfileQuery from '../../store/profile.query';
import {ProfileService} from '../../store/profile.service';
import {SessionService} from '../../../../core/store/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentPage = 'dashboard';
  user: Observable<User>;
  plans: Observable<Plan[]>;
  userRides: Observable<Ride[]>;
  userSubscriptions: Observable<Subscription[]>;
  userInvoices: Observable<Invoice[]>;
  userRidesCount: Observable<number>;
  userSubscriptionsCount: Observable<number>;
  userInvoicesCount: Observable<number>;


  constructor(
    private sessionQuery: SessionQuery,
    private sessionService: SessionService,
    private profileService: ProfileService,
    private profileQuery: ProfileQuery
  ) {
    this.user = this.sessionQuery.selectUser$;

    this.plans = profileQuery.selectActivePlans$;
    this.userRides = profileQuery.selectUserRides$;
    this.userSubscriptions = profileQuery.selectUserSubscriptions$;
    this.userInvoices = profileQuery.selectUserInvoices$;
    this.userRidesCount = profileQuery.selectUserRideCount$;
    this.userSubscriptionsCount = profileQuery.selectUserSubscriptionsCount$;
    this.userInvoicesCount = profileQuery.selectUserInvoicesCount$;
  }

  ngOnInit(): void {
    this.getUserSubscriptions(10, 0);
    this.getUserRides(10, 0);
    this.getUserInvoices(10, 0);

  }

  changeCurrentPage(newPage: string): void {
    this.currentPage = newPage;
  }

  editUser(user: EditUser): void {
    this.profileService.editUser(user);
  }

  changePassword(editedPassword: EditedPassword): void {
    this.profileService.editPassword(editedPassword);
  }

  getActivePlans(): void {
    this.profileService.getActivePlans();
  }

  subscribeToPlan(sub: { plan: Plan; autoRenew: boolean }): void {
    this.profileService.subscribeToAPlan(sub);
  }

  unsubscribe(sub: Subscription): void {
    this.profileService.cancelSubscription(sub);
  }

  getUserSubscriptions(limit: number, offset: number): void {
    this.profileService.getCurrentUserSubscriptions(limit, offset);
  }

  getUserRides(limit: number, offset: number): void {
    this.profileService.getCurrentUserRides(limit, offset);
  }

  getUserInvoices(limit: number, offset: number): void {
    this.profileService.getCurrentUserInvoices(limit, offset);
  }

}
