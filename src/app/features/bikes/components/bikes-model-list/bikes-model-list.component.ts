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
    'manufacturer',
    'battery capacity',
    'weight',
    'max power',
    'max speed',
    'max distance',
    'description',
    'image',
    'icon',
    'creation date',
    'update date',
  ];

  ngOnInit(): void {
    setTimeout(() => this.getModels.emit());
  }
}
