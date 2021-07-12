import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Invoice, Ride, Subscription, User} from '../../../../shared/models';
import {AnimationOptions} from 'ngx-lottie';
import {addMonths} from 'date-fns';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  @Input()
  user: User;

  @Input()
  userSubscriptions: Subscription[];

  @Input()
  userSubscriptionsCount: number;

  @Input()
  userRides: Ride[];

  @Input()
  userRidesCount: number;

  @Input()
  userInvoices: Invoice[];

  @Input()
  userInvoicesCount: number;

  @Output()
  getUserSubscriptions = new EventEmitter<{ userId: number, limit: number, offset: number; }>();

  @Output()
  getUserRides = new EventEmitter<{ userId: number, limit: number, offset: number; }>();

  @Output()
  getUserInvoices = new EventEmitter<{ userId: number, limit: number, offset: number; }>();


  lottieUserOptions: AnimationOptions = {
    path: 'assets/lottie/user.json',
  };

  invoicesDisplayedColumn = [
    'id',
    'date',
    'amount',
    'subscription'
  ];
  subscriptionsDisplayedColumn = [
    'id',
    'startDate',
    'duration',
    'autoRenew',
    'plan'
  ];
  ridesDisplayedColumns = [
    'start',
    'end',
    'duration-length',
    'invoice',
    'matricule',
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onGetUserSubscriptions(limit: number, offset: number): void {
    this.getUserSubscriptions.emit({userId: this.user.id, limit, offset});
  }

  onGetUserRides(limit: number, offset: number): void {
    this.getUserRides.emit({userId: this.user.id, limit, offset});
  }

  onGetUserInvoices(limit: number, offset: number): void {
    this.getUserInvoices.emit({userId: this.user.id, limit, offset});
  }

  hasSubscriptions(): boolean {
    return this.user?.subscriptions.length > 0;
  }

  addMonth(date: Date, month: number): Date {
    return addMonths(new Date(date), month);
  }
}
