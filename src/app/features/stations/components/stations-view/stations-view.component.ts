import {Component, Input, OnInit} from '@angular/core';
import {Station} from "../../../../shared/models";

@Component({
  selector: 'app-stations-view',
  templateUrl: './stations-view.component.html',
  styleUrls: ['./stations-view.component.scss']
})
export class StationsViewComponent implements OnInit {

  @Input()
  station: Station

  constructor() {
  }

  ngOnInit(): void {
  }

  getProgressColorClass(): string {
    if (this.station.stationMonitoring[0]?.batteryPercent < 15) {
      return "battery-low"
    }
    if (this.station.stationMonitoring[0]?.batteryPercent < 33) {
      return "battery-warn"
    }
    if (this.station.stationMonitoring[0]?.batteryPercent < 75) {
      return "battery-good"
    }
    return "battery-great"
  }
}
