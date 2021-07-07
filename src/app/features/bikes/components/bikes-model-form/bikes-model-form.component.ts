import { OnChanges } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {
  BikeManufacturer,
  BikeModel,
  BikeModelProps,
} from 'src/app/shared/models';
import { Snackbar } from 'src/app/shared/snackbar/snakbar';

@Component({
  selector: 'app-bikes-model-form',
  templateUrl: './bikes-model-form.component.html',
  styleUrls: ['./bikes-model-form.component.scss'],
})
export class BikesModelFormComponent implements OnInit, OnChanges {
  form: FormGroup;

  @Input()
  isEditMode: boolean;

  @Input()
  editModel: BikeModel;

  @Input()
  manufacturers: BikeManufacturer[];

  @Output()
  postModel = new EventEmitter<BikeModelProps>();

  @Output()
  putModel = new EventEmitter<BikeModelProps>();

  @Output()
  retrieveEditModel = new EventEmitter<number>();

  @Output()
  getManufacturers = new EventEmitter();

  @Output()
  uploadModelImage = new EventEmitter<{ formData: FormData; id: number }>();

  options = [];
  filteredOptions: Observable<BikeManufacturer[]>;

  constructor(
    private fp: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: Snackbar
  ) {
    this.form = this.fp.group({
      fieldName: ['', [Validators.required]],
      fieldManufacturer: ['', [Validators.required]],
      fieldBattery: ['', [Validators.required, Validators.min(0)]],
      fieldWeight: ['', [Validators.required, Validators.min(0)]],
      fieldMaxPower: ['', [Validators.required, Validators.min(0)]],
      fieldMaxSpeed: ['', [Validators.required, Validators.min(0)]],
      fieldDistance: ['', [Validators.required, Validators.min(0)]],
      fieldDescription: ['', [Validators.required]],
      fieldImage: [''],
    });
  }

  ngOnInit(): void {
    if (this.manufacturers && this.manufacturers.length > 0) {
      this.options = this.manufacturers;
      this._setFilters();
    } else {
      this.getManufacturers.emit();
    }
    if (this.isEditMode && !this.editModel) {
      setTimeout(() => {
        const id = Number.parseInt(this.route.snapshot.params.id);
        this.retrieveEditModel.emit(id);
      });
    }
    if (!this.isEditMode) {
      this.form.reset();
    }
  }

  ngOnChanges(): void {
    if (this.manufacturers) {
      this.options = this.manufacturers;
      this._setFilters();
    }
    if (this.isEditMode && this.editModel) {
      this.patchValues();
    }
  }

  private patchValues(): void {
    this.form.controls.fieldName.patchValue(this.editModel.name);
    if (this.editModel.bikeManufacturer) {
      const optionMatchedByBikeManufacturer = this.getSelectedOption(
        this.editModel.bikeManufacturer
      );
      this.form.controls.fieldManufacturer.patchValue(
        optionMatchedByBikeManufacturer
      );
    }
    this.form.controls.fieldBattery.patchValue(this.editModel.batteryCapacity);
    this.form.controls.fieldWeight.patchValue(this.editModel.weight);
    this.form.controls.fieldMaxPower.patchValue(this.editModel.maxPower);
    this.form.controls.fieldMaxSpeed.patchValue(this.editModel.maxSpeed);
    this.form.controls.fieldDistance.patchValue(this.editModel.maxDistance);
    this.form.controls.fieldDescription.patchValue(this.editModel.description);
  }

  getSelectedOption(bikeManufacturer: BikeManufacturer): string {
    return this.options.filter(
      (option) => bikeManufacturer.name === option.name
    )[0];
  }

  displayAutocomplete(manufacturer: BikeManufacturer): string {
    return manufacturer && manufacturer.name ? manufacturer.name : '';
  }

  private _setFilters(): void {
    this.filteredOptions =
      this.form.controls.fieldManufacturer.valueChanges.pipe(
        startWith(''),
        map((value) => (typeof value === 'string' ? value : value.name)),
        map((name) => (name ? this._filter(name) : this.options.slice()))
      );
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  save(): void {
    const model = {
      id: this.editModel && this.editModel.id ? this.editModel.id : null,
      name: this.form.value.fieldName,
      bikeManufacturer: this.form.value.fieldManufacturer.id,
      batteryCapacity: this.form.value.fieldBattery,
      weight: this.form.value.fieldWeight,
      maxPower: this.form.value.fieldMaxPower,
      maxSpeed: this.form.value.fieldMaxSpeed,
      maxDistance: this.form.value.fieldDistance,
      description: this.form.value.fieldDescription,
    };
    if (this.isEditMode && this.editModel) {
      this.putModel.emit(model);
    } else {
      this.postModel.emit(model);
    }
    this.snackBar.success('Enregistré');
  }

  changeImage(event: any): void {
    let fileList: FileList = event.target.files;
    if (fileList.length) {
      const file = fileList[0];
      const id = this.editModel.id;
      const formData = new FormData();
      formData.append('bikeModelImage', file, file.name);
      this.uploadModelImage.emit({ formData, id });
    }
  }
}
