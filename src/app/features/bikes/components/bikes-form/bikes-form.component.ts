import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {
  Bike,
  BikeModel,
  BikeProps,
  BikeStatus,
  Station,
} from 'src/app/shared/models';
import { Snackbar } from 'src/app/shared/snackbar/snakbar';

@Component({
  selector: 'app-bikes-form',
  templateUrl: './bikes-form.component.html',
  styleUrls: ['./bikes-form.component.scss'],
})
export class BikesFormComponent implements OnInit, OnChanges {
  form: FormGroup;

  @Input()
  isEditMode: boolean;

  @Input()
  editBike: Bike;

  @Input()
  models: BikeModel[];

  @Input()
  stations: Station[];

  @Output()
  postBike = new EventEmitter<BikeProps>();

  @Output()
  putBike = new EventEmitter<BikeProps>();

  @Output()
  retrieveEditBike = new EventEmitter<number>();

  @Output()
  getModels = new EventEmitter();

  @Output()
  getStations = new EventEmitter();

  stationOption = [];
  filteredOptionsStation: Observable<Station[]>;

  modelOption = [];
  filteredOptionsModel: Observable<BikeModel[]>;

  constructor(
    private fp: FormBuilder,
    private snackBar: Snackbar,
    private route: ActivatedRoute
  ) {
    this.form = this.fp.group({
      fieldMatricule: ['', [Validators.required]],
      fieldStation: [''],
      fieldRecharging: [''],
      fieldModel: ['', [Validators.required]],
      fieldStatus: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (!this.models || this.models.length === 0) {
      this.getModels.emit();
    } else {
      this.modelOption = this.models;
      this.setFilterForModel();
    }
    if (!this.stations || this.stations.length === 0) {
      this.getStations.emit();
    } else {
      this.stationOption = this.stations;
      this.setFilterForStation();
    }
    if (this.isEditMode && !this.editBike) {
      setTimeout(() => {
        const id = Number.parseInt(this.route.snapshot.params.id);
        this.retrieveEditBike.emit(id);
      });
    }
    if (!this.isEditMode) {
      this.form.reset();
    }
    this.form.reset();
  }

  ngOnChanges(): void {
    if (this.models) {
      this.modelOption = this.models;
      this.setFilterForModel();
    }
    if (this.stations) {
      this.stationOption = this.stations;
      this.setFilterForStation();
    }
    if (this.isEditMode && this.editBike) {
      this.patchValues();
    }
  }

  private patchValues(): void {
    this.form.controls.fieldMatricule.patchValue(this.editBike.matriculate);
    // this.form.controls.fieldStation.patchValue(this.editBike.station);
    this.form.controls.fieldRecharging.patchValue(this.editBike.recharging);
    // this.form.controls.fieldModel.patchValue(this.editBike.matriculate);
    this.form.controls.fieldStatus.patchValue(this.editBike.status);
  }

  /********************************
   * TODO request bike with station and model and get the good option
   */
  private getOptionForStation(station: Station): string {
    return '';
  }

  private getOptionForModel(model: BikeModel): string {
    return '';
  }

  private setFilterForStation(): void {
    this.filteredOptionsStation =
      this.form.controls.fieldStation.valueChanges.pipe(
        startWith(''),
        map((value) => (typeof value === 'string' ? value : value.name)),
        map((name) =>
          name ? this.filterStation(name) : this.stationOption.slice()
        )
      );
  }

  private filterStation(name: string): Station[] {
    const filterValue = name.toLowerCase();
    return this.stationOption.filter((option) =>
      option.streetName.toLowerCase().includes(filterValue)
    );
  }

  private setFilterForModel(): void {
    this.filteredOptionsModel = this.form.controls.fieldModel.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      map((name) => (name ? this.filterModel(name) : this.modelOption.slice()))
    );
  }

  private filterModel(name: string): BikeModel[] {
    const filterValue = name.toLowerCase();
    return this.modelOption.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  save(): void {
    const bike = {
      matriculate: String(this.form.value.fieldMatricule),
      station: this.form.value.fieldStation.id,
      recharging: this.form.value.fieldRecharging === 'true',
      model: this.form.value.fieldModel.id,
      status: BikeStatus[this.form.value.fieldStatus],
    };
    if (this.editBike && this.editBike.id) {
      bike['id'] = this.editBike.id;
    }
    if (this.isEditMode) {
      this.putBike.emit(bike);
    } else {
      this.postBike.emit(bike);
    }
    this.snackBar.success('Enregistré');
  }

  displayAutocompleteStation(station: Station): string {
    return station && station.streetName ? station.streetName : '';
  }

  displayAutocompleteModel(model: BikeModel): string {
    return model && model.name ? model.name : '';
  }
}
