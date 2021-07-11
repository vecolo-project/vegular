import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Bike, Ride} from '../../../../shared/models';
import {AnimationOptions} from 'ngx-lottie';
import {API_RESSOURCE_URI} from '../../../../shared/api-ressource-uri/api-ressource-uri';
import {timer} from 'rxjs';

@Component({
  selector: 'app-bike-view',
  templateUrl: './bike-view.component.html',
  styleUrls: ['./bike-view.component.scss']
})
export class BikeViewComponent implements OnInit {

  @Input()
  bike: Bike;

  @Input()
  rides: Ride[];

  @Input()
  rideCount: number;

  @Output()
  getRides = new EventEmitter<{ bikeId: number, limit: number, offset: number; }>();

  @Input()
  isStaff: boolean;

  lottieBikeOptions: AnimationOptions = {
    path: 'assets/lottie/bike_3.json',
  };

  rideDisplayedColumns = [
    'start',
    'end',
    'duration-length',
    'invoice',
    'matricule',
    'user'
  ];


  constructor() {
  }

  ngOnInit(): void {
    timer(500)
      .subscribe(() => {
        this.onGetRides(10, 0);
      });
  }


  getBikeModelImgSrc(): string {
    return API_RESSOURCE_URI.UPLOAD_IMAGE_MODEL + this.bike?.model?.image;
  }

  onGetRides(limit: number, offset: number): void {
    if (this.bike && this.isStaff) {
      this.getRides.emit({bikeId: this.bike?.id, limit, offset});
    }
  }


  getProgressColorClass(): string {
    if (this.bike?.batteryPercent < 15) {
      return 'battery-low';
    }
    if (this.bike?.batteryPercent < 33) {
      return 'battery-warn';
    }
    if (this.bike?.batteryPercent < 75) {
      return 'battery-good';
    }
    return 'battery-great';
  }


}
