import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Bike} from 'src/app/shared/models';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../../../../shared/confirm-dialog/confirm-dialog.component';
import {FormControl} from '@angular/forms';

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
  getBikes = new EventEmitter<{ limit: number; offset: number, searchQuery: string }>();

  @Output()
  deleteBike = new EventEmitter<number>();

  @Output()
  viewBike = new EventEmitter<number>();

  displayedColumns = [
    'id',
    'matriculate',
    'batteryPercent',
    'recharging',
    'status',
    'action',
  ];

  pageIndex: number;
  pageSize: number;
  searchQuery: FormControl;

  constructor(private dialog: MatDialog) {
    this.searchQuery = new FormControl('');
  }

  ngOnInit(): void {
    this.getBikesF(0, 10);
  }

  ngOnChanges(): void {
  }

  getBikesF(pageIndex: number, pageSize: number): void {
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;

    setTimeout(() => this.getBikes.emit({
      limit: this.pageSize,
      offset: this.pageIndex * this.pageSize,
      searchQuery: this.searchQuery.value
    }));
  }

  onSearch(): void {
    this.pageIndex = 0;
    this.getBikesF(this.pageIndex, this.pageSize);
  }

  onViewBike(bike: Bike): void {
    this.viewBike.emit(bike.id);
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
