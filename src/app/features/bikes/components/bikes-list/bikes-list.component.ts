import {Component, EventEmitter, Input, OnChanges, OnInit, Output,} from '@angular/core';
import {Bike} from 'src/app/shared/models';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../../../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.scss'],
})
export class BikesListComponent implements OnInit, OnChanges {
  @Input()
  bikes: Bike[];

  @Input()
  bikesCount: number;

  @Input()
  loading: boolean;

  @Output()
  getBikes = new EventEmitter();

  @Output()
  deleteBike = new EventEmitter<number>();

  displayedColumns = [
    'id',
    'matriculate',
    'batteryPercent',
    'recharging',
    'status',
    'action',
  ];

  tableDef: Array<any> = [
    {
      key: 'id',
      header: 'id',
    },
    {
      key: 'matriculate',
      header: 'matricule',
    },
    {
      key: 'batteryPercent',
      header: 'battery percent',
    },
    {
      key: 'recharging',
      header: 'en charge',
    },
    {
      key: 'status',
      header: 'status',
    },
    {
      key: 'action',
      header: 'Action',
    },
  ];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getUsersWithPagination(10, 0);
  }

  ngOnChanges(): void {
  }

  getUsersWithPagination(limit: number, offset: number): void {
    setTimeout(() => this.getBikes.emit({limit, offset}));
  }

  onDelete(id: number): void {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Suppression d\'un vélo',
        message: 'Êtes vous sûr de vouloir supprimer ce vélo ?'
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteBike.emit(id);
      }
    });
  }
}
