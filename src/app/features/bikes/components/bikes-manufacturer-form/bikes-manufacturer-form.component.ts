import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BikeManufacturer, BikeManufacturerProps } from 'src/app/shared/models';

@Component({
  selector: 'app-bikes-manufacturer-form',
  templateUrl: './bikes-manufacturer-form.component.html',
  styleUrls: ['./bikes-manufacturer-form.component.scss'],
})
export class BikesManufacturerFormComponent implements OnInit {
  form: FormGroup;

  @Input()
  isEditMode: boolean;

  @Input()
  editManufacturer: BikeManufacturer;

  @Output()
  postManufacturer = new EventEmitter<BikeManufacturerProps>();

  @Output()
  putManufacturer = new EventEmitter<BikeManufacturerProps>();

  @Output()
  retrieveEditManufacturer = new EventEmitter<number>();

  constructor(private fp: FormBuilder, private route: ActivatedRoute) {
    this.form = this.fp.group({
      fieldName: ['', [Validators.required]],
      fieldPhone: ['', [Validators.required, Validators.minLength(10)]],
      fieldAddress: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (this.isEditMode) {
      if (!this.editManufacturer) {
        setTimeout(() => {
          const id = Number.parseInt(this.route.snapshot.params.id);
          this.retrieveEditManufacturer.emit(id);
        });
      } else {
        this.patchValues();
      }
    } else {
      this.form.reset();
    }
  }

  ngOnChanges(): void {
    if (this.editManufacturer) {
      this.patchValues();
    }
  }

  private patchValues(): void {
    this.form.controls.fieldName.patchValue(this.editManufacturer.name);
    this.form.controls.fieldPhone.patchValue(this.editManufacturer.phone);
    this.form.controls.fieldAddress.patchValue(this.editManufacturer.address);
  }

  save(): void {
    const manufacturer = {
      id:
        this.editManufacturer && this.editManufacturer.id
          ? this.editManufacturer.id
          : null,
      name: String(this.form.value.fieldName),
      phone: String(this.form.value.fieldPhone),
      address: String(this.form.value.fieldAddress),
    };
    if (this.isEditMode) {
      this.putManufacturer.emit(manufacturer);
    } else {
      this.postManufacturer.emit(manufacturer);
    }
  }
}
