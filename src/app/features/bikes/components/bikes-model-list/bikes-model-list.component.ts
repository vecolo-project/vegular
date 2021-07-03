import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bikes-model-list',
  templateUrl: './bikes-model-list.component.html',
  styleUrls: ['./bikes-model-list.component.scss'],
})
export class BikesModelListComponent implements OnInit {
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
  bikesModel = [];
  constructor() {}

  ngOnInit(): void {}
}
