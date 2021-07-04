import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BikeModel } from 'src/app/shared/models';

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

  constructor() {}

  displayedColumns = [
    'id',
    'name',
    'bikeManufacturer',
    'batteryCapacity',
    'weight',
    'maxPower',
    'maxSpeed',
    'maxDistance',
    'description',
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
      key: 'description',
      header: 'Description',
    },
    {
      key: 'action',
      header: 'Action',
    },
  ];

  ngOnInit(): void {
    setTimeout(() => this.getModels.emit());
  }
}
