import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Ride, Station } from '../../../../shared/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-end-ride',
  templateUrl: './end-ride.component.html',
  styleUrls: ['./end-ride.component.scss'],
})
export class EndRideComponent implements OnInit {
  @Input()
  currentRide: Ride;

  @Output()
  submitRide = new EventEmitter<Ride>();

  rideForm: FormGroup;

  lottieBikeOptions: AnimationOptions = {
    path: 'assets/lottie/bike_4.json',
  };

  constructor(@Inject(FormBuilder) fb) {
    this.rideForm = fb.group({
      STATION: ['', [Validators.required]],
      LENGTH: ['', [Validators.required]],
    });
  }

  onSelectStation(station: Station) {
    this.rideForm.controls.STATION.patchValue(station);
  }

  onSubmitRide() {
    const ride: Ride = {
      ...this.currentRide,
      endStation: this.rideForm.value.STATION,
      rideLength: this.rideForm.value.LENGTH,
    };
    this.submitRide.emit(ride);
  }

  ngOnInit(): void {}
}
