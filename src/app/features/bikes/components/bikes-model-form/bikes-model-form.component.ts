import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {BikeManufacturer, BikeModel, BikeModelProps,} from 'src/app/shared/models';

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

  @Input()
  manufacturers: BikeManufacturer[];

  @Output()
  postModel = new EventEmitter<BikeModelProps>();

  @Output()
  putModel = new EventEmitter<BikeModel>();

  @Output()
  retrieveEditModel = new EventEmitter<number>();

  @Output()
  getManufacturers = new EventEmitter();

  options = [];
  filteredOptions: Observable<BikeManufacturer[]>;

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

  ngOnInit(): void {
    if (this.manufacturers && this.manufacturers.length > 0) {
      this.options = this.manufacturers;
      this._setFilters();
    } else {
      console.log('getManufacturers');
      this.getManufacturers.emit();
    }
  }

  ngOnChanges(): void {
    if (this.manufacturers) {
      this.options = this.manufacturers;
      this._setFilters();
    }
  }

  displayAutocomplete(manufacturer: BikeManufacturer): string {
    return manufacturer && manufacturer.name ? manufacturer.name : '';
  }

  private _setFilters() {
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
