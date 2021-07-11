import {Component, Input, OnInit} from '@angular/core';
import {Bike} from '../../../../shared/models';
import {AnimationOptions} from 'ngx-lottie';
import {API_RESSOURCE_URI} from '../../../../shared/api-ressource-uri/api-ressource-uri';

@Component({
  selector: 'app-bike-view',
  templateUrl: './bike-view.component.html',
  styleUrls: ['./bike-view.component.scss']
})
export class BikeViewComponent implements OnInit {

  @Input()
  bike: Bike;

  @Input()
  isStaff: boolean;

  lottieBikeOptions: AnimationOptions = {
    path: 'assets/lottie/bike_3.json',
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onEdit(): void {

  }

  onDelete(): void {

  }

  getBikeModelImgSrc(): string {
    return API_RESSOURCE_URI.UPLOAD_IMAGE_MODEL + this.bike?.model?.image;
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
