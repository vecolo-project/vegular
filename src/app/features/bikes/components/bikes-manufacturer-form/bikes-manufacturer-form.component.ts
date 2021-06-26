import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BikeManufacturerProps } from 'src/app/shared/models';

@Component({
  selector: 'app-bikes-manufacturer-form',
  templateUrl: './bikes-manufacturer-form.component.html',
  styleUrls: ['./bikes-manufacturer-form.component.scss'],
})
export class BikesManufacturerFormComponent implements OnInit {
  form: FormGroup;

  @Output()
  postManufacturer = new EventEmitter<BikeManufacturerProps>();

  constructor(private fp: FormBuilder) {
    this.form = this.fp.group({
      fieldName: ['', [Validators.required]],
      fieldPhone: ['', [Validators.required, Validators.minLength(10)]],
      fieldAddress: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.form.reset();
  }

  save(): void {
    this.postManufacturer.emit({
      name: String(this.form.value.fieldName),
      phone: String(this.form.value.fieldPhone),
      address: String(this.form.value.fieldAddress),
    });
  }
}
