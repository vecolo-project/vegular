import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BikeModel} from 'src/app/shared/models';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../../../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-bikes-model-list',
  templateUrl: './bikes-model-list.component.html',
  styleUrls: ['./bikes-model-list.component.scss'],
})
export class BikesModelListComponent implements OnInit {
  @Input()
  models: BikeModel[];

  @Input()
  modelsCount: number;

  @Input()
  loading: boolean;

  @Output()
  getModels = new EventEmitter();

  @Output()
  setEditModel = new EventEmitter<number>();

  @Output()
  deleteModel = new EventEmitter<number>();

  displayedColumns = [
    'id',
    'name',
    'bikeManufacturer',
    'batteryCapacity',
    'weight',
    'maxPower',
    'maxSpeed',
    'maxDistance',
    'action',
  ];

  tableDef: Array<any> = [
    {
      key: 'id',
      header: 'id',
    },
    {
      key: 'name',
      header: 'Name',
    },
    {
      key: 'bikeManufacturer',
      header: 'manufacturer',
    },
    {
      key: 'batteryCapacity',
      header: 'Battery capacity',
    },
    {
      key: 'weight',
      header: 'Poids',
    },
    {
      key: 'maxPower',
      header: 'Max power',
    },
    {
      key: 'maxSpeed',
      header: 'Max speed',
    },
    {
      key: 'maxDistance',
      header: 'Max distance',
    },
    {
      key: 'action',
      header: 'Action',
    },
  ];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    setTimeout(() => this.getModels.emit());
  }

  onDelete(id: number): void {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Suppression d\'un modèle de vélo',
        message: 'Êtes vous sûr de vouloir supprimer ce modèle de vélo ?'
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteModel.emit(id);
      }
    });
  }

}
