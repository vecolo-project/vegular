import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Station, StationMonitoring} from "../../../../shared/models";
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

  @Input()
  token:string

  @Output()
  getStation = new EventEmitter<number>();

  @Output()
  getMonitoring = new EventEmitter<{ stationId: number, nbDays: number; }>();

  @Output()
  getToken = new EventEmitter<number>();

  @Input()
  stationMonitorings: StationMonitoring[];

  @Input()
  isAdmin: boolean

  lottieStationOptions: AnimationOptions = {
    path: 'assets/lottie/solarPanel2.json',
  }

  constructor() {
  }

  ngOnInit(): void {
    const obs = interval(5000)
      .subscribe(() => {
        this.getStation.emit(this.station?.id);
      });
  }

  getLastMonitoring(): StationMonitoring {
    if (this.station?.stationMonitoring.length > 0) {
      return this.station.stationMonitoring[0];
    }
    return undefined;
  }

  retrieveMonitoring(nbDays: number) {
    this.getMonitoring.emit({stationId: this.station?.id, nbDays: nbDays})
  }

  getProgressColorClass(): string {
    if (this.getLastMonitoring()?.batteryPercent < 15) {
      return "battery-low"
    }
    if (this.getLastMonitoring()?.batteryPercent < 33) {
      return "battery-warn"
    }
    if (this.getLastMonitoring()?.batteryPercent < 75) {
      return "battery-good"
    }
    return "battery-great"
  }
}
