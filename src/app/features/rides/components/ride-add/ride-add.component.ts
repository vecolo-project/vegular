import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Bike, Ride, Station, User} from '../../../../shared/models';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-ride-add',
  templateUrl: './ride-add.component.html',
  styleUrls: ['./ride-add.component.scss']
})
export class RideAddComponent implements OnInit {

  @Output()
  submitRide = new EventEmitter<Ride>();

  rideForm: FormGroup;

  constructor(@Inject(FormBuilder) fb) {
    this.rideForm = fb.group({
      DATE: [new Date(), [Validators.required]],
      DURATION: [0, [Validators.required, Validators.min(1)]],
      LENGTH: [0, [Validators.required, Validators.min(1)]],
      INVOICE_AMOUNT: [0, [Validators.required, Validators.min(0)]],
      USER: ['', Validators.required],
      BIKE: ['', Validators.required],
      START_STATION: ['', Validators.required],
      END_STATION: ['', Validators.required]
    });
  }

  lottieBikeOptions: AnimationOptions = {
    path: 'assets/lottie/bike_4.json',
  };

  ngOnInit(): void {
  }

  onBikeSearch(): void {
    this.rideForm.controls.BIKE.patchValue(null);
  }

  onUserSearch(): void {
    this.rideForm.controls.USER.patchValue(null);
  }

  onStartStationSearch(): void {
    this.rideForm.controls.START_STATION.patchValue(null);
  }

  onEndStationSearch(): void {
    this.rideForm.controls.END_STATION.patchValue(null);
  }

  onBikeSelect(bike: Bike): void {
    this.rideForm.controls.BIKE.patchValue(bike);
  }

  onUserSelect(user: User): void {
    this.rideForm.controls.USER.patchValue(user);
  }

  onStartStationSelect(station: Station): void {
    this.rideForm.controls.START_STATION.patchValue(station);
  }

  onEndStationSelect(station: Station): void {
    this.rideForm.controls.END_STATION.patchValue(station);
  }

  onSubmit(): void {
    const ride: Ride = {
      user: this.rideForm.value.USER,
      bike: this.rideForm.value.BIKE,
      duration: this.rideForm.value.DURATION,
      rideLength: this.rideForm.value.LENGTH,
      invoiceAmount: this.rideForm.value.INVOICE_AMOUNT,
      startStation: this.rideForm.value.START_STATION,
      endStation: this.rideForm.value.END_STATION,
      createdAt: this.rideForm.value.DATE
    };
    this.submitRide.emit(ride);
  }
}
