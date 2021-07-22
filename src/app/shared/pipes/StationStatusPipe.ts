import {Pipe} from '@angular/core';
import {StationMonitoringStatus} from '../models';

@Pipe({name: 'stationStatusPipe'})
export class StationStatusPipe {
  transform(value: string): string {
    switch (value) {
      case StationMonitoringStatus.OFF:
        return 'Éteinte';
      case StationMonitoringStatus.ACTIVE:
        return 'Active';
      case StationMonitoringStatus.MAINTAINING:
        return 'En maintenance';
      default:
        return 'Statut inconnu';
    }
  }
}
