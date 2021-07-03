import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.scss'],
})
export class BikesListComponent implements OnInit {
  bikes: [];
  displayedColumns = [
    'id',
    'matricule',
    'station',
    'battery percent',
    'recharging',
    'model',
    'status',
    'creation date',
    'update date',
  ];
  constructor() {}

  ngOnInit(): void {}
}
