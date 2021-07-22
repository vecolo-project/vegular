import {Pipe} from '@angular/core';

@Pipe({name: 'bikeStatusPipe'})
export class BikeStatusPipe {
  transform(value: string): string {
    switch (value) {
      case 'OFF':
        return 'Éteint';
      case 'MAINTAINING':
        return 'En maintenance';
      case 'IN_RIDE':
        return 'Trajet en cours';
      case 'RECHARGING':
        return 'Chargement en cours';
      default:
        return 'Status inconnu';
    }
  }
}
