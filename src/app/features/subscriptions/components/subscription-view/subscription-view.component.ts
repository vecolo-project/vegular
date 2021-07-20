import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Plan, Subscription } from '../../../../shared/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AnimationOptions } from 'ngx-lottie';
import { ConfirmDialogComponent } from '../../../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-subscription-view',
  templateUrl: './subscription-view.component.html',
  styleUrls: ['./subscription-view.component.scss'],
})
export class SubscriptionViewComponent implements OnInit {
  @Input()
  subscription: Subscription;

  @Input()
  plans: Plan[];

  @Output()
  retrievePlans = new EventEmitter<void>();

  @Output()
  deleteSubscription = new EventEmitter<number>();

  @Output()
  submit = new EventEmitter<Subscription>();

  editMode: boolean;
  subscriptionForm: FormGroup;

  lottieMoneyOptions: AnimationOptions = {
    path: 'assets/lottie/money.json',
  };

  constructor(@Inject(FormBuilder) fb, private dialog: MatDialog) {
    this.subscriptionForm = fb.group({
      START_DATE: ['', [Validators.required]],
      DURATION: ['', [Validators.required, Validators.min(1)]],
      AUTO_RENEW: ['', [Validators.required]],
      PLAN: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.editMode = false;
  }

  onEdit() {
    this.retrievePlans.emit();
    this.subscriptionForm.controls.START_DATE.patchValue(
      this.subscription.startDate
    );
    this.subscriptionForm.controls.DURATION.patchValue(
      this.subscription.monthDuration
    );
    this.subscriptionForm.controls.AUTO_RENEW.patchValue(
      this.subscription.autoRenew
    );
    this.subscriptionForm.controls.PLAN.patchValue(this.subscription.plan);
    this.editMode = true;
  }

  onSubmit(): void {
    const subscription: Subscription = {
      id: this.subscription.id,
      startDate: this.subscriptionForm.value.START_DATE,
      monthDuration: this.subscriptionForm.value.DURATION,
      autoRenew: this.subscriptionForm.value.AUTO_RENEW,
      plan: this.subscriptionForm.value.PLAN,
      user: this.subscription.user,
    };
    this.submit.emit(subscription);
    this.editMode = false;
  }

  onDelete() {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: "Suppression d'un abonnement",
        message: 'Êtes vous sûr de vouloir supprimer cet abonnement ?',
      },
    });
    confirmDialog.afterClosed().subscribe((result) => {
      if (result === true) {
        this.deleteSubscription.emit(this.subscription.id);
      }
    });
  }
}
