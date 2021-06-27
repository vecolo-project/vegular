import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BikeModel, BikeModelProps } from 'src/app/shared/models';

@Component({
  selector: 'app-bikes-model-form',
  templateUrl: './bikes-model-form.component.html',
  styleUrls: ['./bikes-model-form.component.scss'],
})
export class BikesModelFormComponent implements OnInit {
  form: FormGroup;

  @Input()
  isEditMode: boolean;

  @Input()
  editModel: BikeModel;

  @Output()
  postModel = new EventEmitter<BikeModelProps>();

  @Output()
  putModel = new EventEmitter<BikeModel>();

  @Output()
  retrieveEditModel = new EventEmitter<number>();

  constructor(private fp: FormBuilder) {
    this.form = this.fp.group({
      fieldName: ['', [Validators.required]],
      fieldManufacturer: ['', [Validators.required]],
      fieldBattery: ['', [Validators.required]],
      fieldWeight: ['', [Validators.required]],
      fieldMaxPower: ['', [Validators.required]],
      fieldMaxSpeed: ['', [Validators.required]],
      fieldDistance: ['', [Validators.required]],
      fieldDescription: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
  save() {
    const model = {
      id: null,
      name: this.form.value.fieldName,
      batter: this.form.value.fieldManufacturer,
      batteryCapacity: this.form.value.fieldBattery,
      weight: this.form.value.fieldWeight,
      maxPower: this.form.value.fieldMaxPower,
      maxSpeed: this.form.value.fieldMaxSpeed,
      maxDistance: this.form.value.fieldDistance,
      description: this.form.value.fieldDescription,
    };
    this.postModel.emit(model);
  }
}
