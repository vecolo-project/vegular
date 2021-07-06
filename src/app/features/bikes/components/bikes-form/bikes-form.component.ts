import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Bike, BikeModel } from 'src/app/shared/models';

@Component({
  selector: 'app-bikes-form',
  templateUrl: './bikes-form.component.html',
  styleUrls: ['./bikes-form.component.scss'],
})
export class BikesFormComponent implements OnInit {
  form: FormGroup;
  @Input()
  editBike: Bike;

  @Input()
  models: BikeModel[];

  @Output()
  postBike = new EventEmitter();

  @Output()
  putBike = new EventEmitter<number>();

  @Output()
  retrieveEditBike = new EventEmitter<number>();

  @Output()
  getModels = new EventEmitter();

  constructor(private fp: FormBuilder) {
    this.form = this.fp.group({
      fieldMatricule: [''],
      fieldStation: [''],
      fieldRecharging: [''],
      fieldModel: [''],
      fieldStatus: [''],
    });
  }

  ngOnInit(): void {}

  save(): void {}
}
