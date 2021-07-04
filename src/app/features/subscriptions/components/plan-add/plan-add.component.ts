import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {Plan} from "../../../../shared/models";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AnimationOptions} from "ngx-lottie";

@Component({
  selector: 'app-plan-add',
  templateUrl: './plan-add.component.html',
  styleUrls: ['./plan-add.component.scss']
})
export class PlanAddComponent implements OnInit {

  @Output()
  submit = new EventEmitter<Plan>();

  planForm: FormGroup;

  lottieBikeOptions: AnimationOptions = {
    path: 'assets/lottie/bike_2.json',
  }

  constructor(@Inject(FormBuilder) fb) {
    this.planForm = fb.group({
      NAME: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      PRICE: [0, [Validators.required, Validators.min(0)]],
      RIDE_PRICE: [0, [Validators.required, Validators.min(0)]],
      UNLIMITED: [false, Validators.required]
    })

  }

  ngOnInit(): void {
  }

  onSubmit() {
    const plan: Plan = {
      name: this.planForm.value.NAME,
      price: this.planForm.value.PRICE,
      costPerMinute: this.planForm.value.RIDE_PRICE,
      isUnlimited: this.planForm.value.UNLIMITED
    }
    this.submit.emit(plan);
  }
}
