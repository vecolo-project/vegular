import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Bike, BikeModel, BikeProps, BikeStatus, Station,} from 'src/app/shared/models';
import {Snackbar} from 'src/app/shared/snackbar/snakbar';

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

  @Output()
  postBike = new EventEmitter<BikeProps>();

  @Output()
  putBike = new EventEmitter<BikeProps>();

  @Output()
  retrieveEditBike = new EventEmitter<number>();

  @Output()
  getModels = new EventEmitter();

  modelOption = [];
  filteredOptionsModel: Observable<BikeModel[]>;

  constructor(
    private fp: FormBuilder,
    private snackBar: Snackbar,
    private route: ActivatedRoute,
    private router: Router
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
    if (this.isEditMode) {
      setTimeout(() => {
        const id = Number.parseInt(this.route.snapshot.params.id, 10);
        this.retrieveEditBike.emit(id);
      });
    }
    this.form.reset();
  }

  ngOnChanges(): void {
    if (this.models) {
      this.modelOption = this.models;
      this.setFilterForModel();
    }
    if (
      this.isEditMode &&
      this.editBike &&
      this.editBike.station &&
      this.modelOption.length
    ) {
      this.patchValues();
    }
  }

  private patchValues(): void {
    const modelOption = this.getOptionForModel(this.editBike.model);
    this.form.controls.fieldMatricule.patchValue(this.editBike.matriculate);
    this.form.controls.fieldRecharging.patchValue(this.editBike.recharging);
    this.form.controls.fieldModel.patchValue(modelOption);
    this.form.controls.fieldStatus.patchValue(this.editBike.status);
  }

  onStationSearch(): void {
    this.form.controls.fieldStation.patchValue(null);
  }

  onStationSelect(station: Station): void {
    this.form.controls.fieldStation.patchValue(station);
  }

  private getOptionForModel(model: BikeModel): string {
    return this.modelOption.find((option) => option.name === model.name);
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
      id: undefined,
      batteryPercent: undefined,
      matriculate: String(this.form.value.fieldMatricule),
      station: this.form.value.fieldStation.id,
      recharging: this.form.value.fieldRecharging === 'true',
      model: this.form.value.fieldModel.id,
      status: BikeStatus[this.form.value.fieldStatus],
    };
    if (this.isEditMode && this.editBike.id) {
      bike.id = this.editBike.id;
      bike.batteryPercent = this.editBike.batteryPercent;
    }
    if (this.isEditMode) {
      this.putBike.emit(bike);
    } else {
      this.postBike.emit(bike);
    }
    this.snackBar.success('Enregistré');
    this.router.navigate(['/bikes']);
  }

}
