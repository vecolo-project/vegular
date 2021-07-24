import {Pipe} from '@angular/core';
import {BikeStatus} from '../models';

@Pipe({name: 'bikeStatusPipe'})
export class BikeStatusPipe {
  transform(value: string): string {
    switch (value) {
      case BikeStatus.OFF:
        return 'Éteint';
      case BikeStatus.MAINTAINING:
        return 'En maintenance';
      case BikeStatus.IN_RIDE:
        return 'Trajet en cours';
      case BikeStatus.RECHARGING:
        return 'Chargement en cours';
      default:
        return 'Status inconnu';
    }
  }
}
