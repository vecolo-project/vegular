import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Invoice, Ride, Subscription, User} from '../../../../shared/models';
import {AnimationOptions} from 'ngx-lottie';
import {addMonths} from 'date-fns';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  @Output()
  sendUserMail = new EventEmitter<{ userId: number, subject: string, content: string }>();
  sendingEmailMode: boolean;
  emailForm: FormGroup;

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

  constructor(@Inject(FormBuilder) fb) {
    this.emailForm = fb.group({
      subject: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.sendingEmailMode = false;
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

  onSendingEmailMode(): void {
    this.sendingEmailMode = true;
    this.emailForm.controls.subject.patchValue(null);
    this.emailForm.controls.content.patchValue(null);
  }

  onSendEmail(): void {
    this.sendingEmailMode = false;
    this.sendUserMail.emit({
      userId: this.user?.id,
      subject: this.emailForm.value.subject,
      content: this.emailForm.value.content,
    });
  }
}
