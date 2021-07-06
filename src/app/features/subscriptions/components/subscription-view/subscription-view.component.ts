import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Subscription} from "../../../../shared/models";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {AnimationOptions} from "ngx-lottie";
import {ConfirmDialogComponent} from "../../../../shared/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-subscription-view',
  templateUrl: './subscription-view.component.html',
  styleUrls: ['./subscription-view.component.scss']
})
export class SubscriptionViewComponent implements OnInit {

  @Input()
  subscription: Subscription;

  @Output()
  submit = new EventEmitter<Subscription>();

  editMode: boolean;
  subscriptionForm: FormGroup;

  lottieMoneyOptions: AnimationOptions = {
    path: 'assets/lottie/money.json',
  }

  constructor(@Inject(FormBuilder) fb, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.editMode = false;
  }

  onEdit() {
    console.log('on edit');
  }

    onDelete() {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Suppression d\'un abonnement',
        message: 'Êtes vous sûr de vouloir supprimer cet abonnement ?'
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        console.log('Delete');
      }
    })
  }


}
