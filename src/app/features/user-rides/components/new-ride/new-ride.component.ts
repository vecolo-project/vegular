import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Bike, Ride, Station} from "../../../../shared/models";
import {AnimationOptions} from "ngx-lottie";

@Component({
  selector: 'app-new-ride',
  templateUrl: './new-ride.component.html',
  styleUrls: ['./new-ride.component.scss']
})
export class NewRideComponent implements OnInit {

  @Input()
  bikes: Bike[];

  @Output()
  selectStation = new EventEmitter<Station>();

  @Output()
  submitRide = new EventEmitter<Ride>();

  rideForm: FormGroup;

  lottieBikeOptions: AnimationOptions = {
    path: 'assets/lottie/bike_4.json',
  };

  constructor(@Inject(FormBuilder) fb) {
    this.rideForm = fb.group({
      STATION: ['', [Validators.required]],
      BIKE: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSelectStation(station: Station) {
    this.selectStation.emit(station);
    this.rideForm.controls.STATION.patchValue(station);
    this.rideForm.controls.BIKE.patchValue(null);
  }

  onSubmitRide() {
    const ride: Ride = {
      startStation: this.rideForm.value.STATION,
      bike: this.rideForm.value.BIKE,
    };
    this.submitRide.emit(ride);
  }

  onStartStationSearch():void{
    this.rideForm.controls.STATION.patchValue(null);
    this.rideForm.controls.BIKE.patchValue(null);
  }
}
