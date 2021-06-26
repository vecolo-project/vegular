import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes-manufacturer-list',
  templateUrl: './bikes-manufacturer-list.component.html',
  styleUrls: ['./bikes-manufacturer-list.component.scss'],
})
export class BikesManufacturerListComponent implements OnInit {
  bikesManufacturer = [];
  displayedColumns = ['id', 'name', 'phone', 'address'];
  constructor() {}

  ngOnInit(): void {}
}
