import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BikeManufacturer} from 'src/app/shared/models';
import {ConfirmDialogComponent} from '../../../../shared/confirm-dialog/confirm-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-bikes-manufacturer-list',
  templateUrl: './bikes-manufacturer-list.component.html',
  styleUrls: ['./bikes-manufacturer-list.component.scss'],
})
export class BikesManufacturerListComponent implements OnInit {
  @Input()
  manufacturers: BikeManufacturer[];

  @Input()
  manufacturersCount: number;

  @Input()
  loading: boolean;

  @Output()
  getManufacturers = new EventEmitter();

  @Output()
  deleteManufacturer = new EventEmitter<number>();

  @Output()
  setEditManufacturer = new EventEmitter<number>();

  displayedColumns = ['id', 'name', 'phone', 'address', 'action'];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getManufacturers.emit();
    });
  }

  onDelete(id: number): void {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Suppression d\'un constructeur de vélo',
        message: 'Êtes vous sûr de vouloir supprimer ce constructeur ?'
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteManufacturer.emit(id);
      }
    });
  }

}
