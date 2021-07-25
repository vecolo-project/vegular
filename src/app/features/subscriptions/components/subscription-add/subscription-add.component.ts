import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Plan, Subscription, User} from '../../../../shared/models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-subscription-add',
  templateUrl: './subscription-add.component.html',
  styleUrls: ['./subscription-add.component.scss']
})
export class SubscriptionAddComponent implements OnInit {

  @Input()
  plans: Plan[];

  @Output()
  retrievePlans = new EventEmitter<void>();

  @Output()
  submit = new EventEmitter<Subscription>();

  subscriptionForm: FormGroup;


  lottieMoneyOptions: AnimationOptions = {
    path: 'assets/lottie/money.json',
  };


  constructor(@Inject(FormBuilder) fb) {
    this.subscriptionForm = fb.group({
      START_DATE: ['', [Validators.required]],
      DURATION: ['', [Validators.required, Validators.min(1)]],
      AUTO_RENEW: [false, [Validators.required]],
      USER: ['', [Validators.required]],
      PLAN: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.retrievePlans.emit();
  }

  onUserSearch(): void {
    this.subscriptionForm.controls.USER.patchValue(null);
  }

  onSelectUser(user: User): void {
    this.subscriptionForm.controls.USER.patchValue(user);
  }

  onSubmit(): void {
    const subscription: Subscription = {
      startDate: this.subscriptionForm.value.START_DATE,
      monthDuration: this.subscriptionForm.value.DURATION,
      autoRenew: this.subscriptionForm.value.AUTO_RENEW,
      plan: this.subscriptionForm.value.PLAN,
      user: this.subscriptionForm.value.USER
    };
    this.submit.emit(subscription);
  }


}
