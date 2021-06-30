import {Component, Inject, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OsmSearchResponse} from "../../../../shared/models/osmSearchResponse.model";
import {Station} from "../../../../shared/models";

@Component({
  selector: 'app-station-create',
  templateUrl: './station-create.component.html',
  styleUrls: ['./station-create.component.scss']
})
export class StationCreateComponent implements OnInit {

  @Output()
  submit = new EventEmitter<Station>();

  stationForm: FormGroup;

  constructor(@Inject(FormBuilder) fb) {
    this.stationForm = fb.group({
      BATTERY_CAPACITY: ['', [Validators.required, Validators.min(1)]],
      BIKE_CAPACITY: ['', [Validators.required, Validators.min(0)]],
      STREET_NUMBER: ['', [Validators.required]],
      STREET_NAME: ['', [Validators.required]],
      CITY: ['', [Validators.required]],
      ZIPCODE: ['', [Validators.required]],
      COORDINATE_Y: ['', [Validators.required]],
      COORDINATE_X: ['', [Validators.required]]
    })
  }

  onAddressInputSearch() {
    console.log('search')
    this.stationForm.controls.STREET_NUMBER.patchValue(null);
    this.stationForm.controls.STREET_NAME.patchValue(null);
    this.stationForm.controls.CITY.patchValue(null);
    this.stationForm.controls.ZIPCODE.patchValue(null);
    this.stationForm.controls.COORDINATE_Y.patchValue(null);
    this.stationForm.controls.COORDINATE_X.patchValue(null);
  }

  onSelectAdress(address: OsmSearchResponse) {
    this.stationForm.controls.STREET_NUMBER.patchValue(address.address.house_number || 0);
    this.stationForm.controls.STREET_NAME.patchValue(address.address.road);
    this.stationForm.controls.CITY.patchValue(address.address.city || address.address.town);
    this.stationForm.controls.ZIPCODE.patchValue(address.address.postcode);
    this.stationForm.controls.COORDINATE_Y.patchValue(address.lat);
    this.stationForm.controls.COORDINATE_X.patchValue(address.lon);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const station: Station = {
      batteryCapacity: this.stationForm.value.BATTERY_CAPACITY,
      bikeCapacity: this.stationForm.value.BIKE_CAPACITY,
      streetNumber: this.stationForm.value.STREET_NUMBER,
      streetName: this.stationForm.value.STREET_NAME,
      city: this.stationForm.value.CITY,
      zipcode: this.stationForm.value.ZIPCODE,
      coordinateX: this.stationForm.value.COORDINATE_X,
      coordinateY: this.stationForm.value.COORDINATE_Y
    }
    this.submit.emit(station);
  }

}
