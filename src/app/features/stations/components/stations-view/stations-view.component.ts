import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Station} from "../../../../shared/models";
import {interval} from "rxjs";
import {AnimationOptions} from "ngx-lottie";

@Component({
  selector: 'app-stations-view',
  templateUrl: './stations-view.component.html',
  styleUrls: ['./stations-view.component.scss']
})
export class StationsViewComponent implements OnInit {

  @Input()
  station: Station

  @Output()
  getStation = new EventEmitter<number>();

  lottieStationOptions: AnimationOptions = {
    path: 'assets/lottie/solarPanel2.json',
  }

  constructor() {
  }

  ngOnInit(): void {
    const obs = interval(5000)
      .subscribe(() => {
        this.getStation.emit(this.station?.id);
      })
  }

  getProgressColorClass(): string {
    if (this.station?.stationMonitoring[0]?.batteryPercent < 15) {
      return "battery-low"
    }
    if (this.station?.stationMonitoring[0]?.batteryPercent < 33) {
      return "battery-warn"
    }
    if (this.station?.stationMonitoring[0]?.batteryPercent < 75) {
      return "battery-good"
    }
    return "battery-great"
  }
}
