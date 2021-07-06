import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Plan} from "../../../../shared/models";
import {AnimationOptions} from "ngx-lottie";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {RouterNavigation} from "../../../../core/router/router.navigation";
import {ConfirmDialogComponent} from "../../../../shared/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-plan-view',
  templateUrl: './plan-view.component.html',
  styleUrls: ['./plan-view.component.scss']
})
export class PlanViewComponent implements OnInit {

  @Input()
  plan: Plan;

  @Output()
  deletePlan = new EventEmitter<number>();

  @Output()
  submit = new EventEmitter<Plan>();


  @Input()
  isAdmin: boolean;

  @Input()
  isStaff: boolean;

  editMode: boolean;
  planForm: FormGroup;


  lottieBikeOptions: AnimationOptions = {
    path: 'assets/lottie/bike_2.json',
  }


  constructor(@Inject(FormBuilder) fb, private dialog: MatDialog) {
    this.planForm = fb.group({
      NAME: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      PRICE: ['', [Validators.required, Validators.min(0)]],
      RIDE_PRICE: ['', [Validators.required, Validators.min(0)]],
      FREE_MINUTES: ['', [Validators.required, Validators.min(0)]],
      ACTIVE: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.editMode = false;
  }

  onEdit() {
    this.planForm.controls.NAME.patchValue(this.plan.name);
    this.planForm.controls.PRICE.patchValue(this.plan.price);
    this.planForm.controls.RIDE_PRICE.patchValue(this.plan.costPerMinute);
    this.planForm.controls.ACTIVE.patchValue(this.plan.isActive);
    this.planForm.controls.FREE_MINUTES.patchValue(this.plan.freeMinutes);
    this.editMode = true
  }

  onSubmit() {
    const plan: Plan = {
      id: this.plan.id,
      name: this.planForm.value.NAME,
      price: this.planForm.value.PRICE,
      costPerMinute: this.planForm.value.RIDE_PRICE,
      freeMinutes: this.planForm.value.FREE_MINUTES,
      isActive: this.planForm.value.ACTIVE
    }
    this.submit.emit(plan);
    this.editMode = false;
  }


  onDelete() {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Suppression d\'un forfait',
        message: 'Êtes vous sûr de vouloir supprimer ce forfait ?'
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.deletePlan.emit(this.plan.id);
      }
    })
  }

}
