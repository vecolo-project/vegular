import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  OnChanges,
  Output,
} from '@angular/core';
import { Bike } from 'src/app/shared/models';

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

  @Output()
  setEditBike = new EventEmitter<number>();

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
  constructor() {}

  ngOnInit(): void {
    this.getUsersWithPagination(10, 0);
  }

  ngOnChanges(): void {}

  getUsersWithPagination(limit: number, offset: number) {
    setTimeout(() => this.getBikes.emit({ limit, offset }));
  }
}
