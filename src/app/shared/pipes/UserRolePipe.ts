import {Pipe} from '@angular/core';
import {Role} from '../models';

@Pipe({name: 'userRolePipe'})
export class UserRolePipe {
  transform(value: string): string {
    switch (value) {
      case Role.STAFF:
        return 'Membre du staff';
      case Role.ADMIN:
        return 'Administrateur';
      case Role.CLIENT:
        return 'Utilisateur';
      default:
        return 'Role inconnu';
    }
  }
}
