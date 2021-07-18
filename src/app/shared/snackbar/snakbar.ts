import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({providedIn: 'root'})
export class Snackbar {
  constructor(private snackBar: MatSnackBar) {
  }

  success(message: string, duration = 3000): void {
    this.snackBar.open(message, '', {
      duration,
      panelClass: ['bg-green-500', 'text-gray-300'],
      horizontalPosition: 'start',
    });
  }

  danger(message: string, duration = 3000): void {
    this.snackBar.open(message, '', {
      duration,
      panelClass: ['bg-red-500', 'text-gray-300'],
      horizontalPosition: 'start',
    });
  }

  warnning(message: string, duration = 3000): void {
    this.snackBar.open(message, '', {
      duration,
      panelClass: ['bg-yellow-700', 'text-gray-300'],
      horizontalPosition: 'start',
    });
  }
}
