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

  @Output()
  uploadModelImage = new EventEmitter();

  options = [];
  filteredOptions: Observable<BikeManufacturer[]>;

  constructor(private fp: FormBuilder) {
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

  changeImage(event: any): void {
    let fileList: FileList = event.target.files;
    if (fileList.length) {
      const file = fileList[0];
      const formData = new FormData();
      formData.append('file', file, file.name);
      this.uploadModelImage.emit(formData);
    }
  }
}
