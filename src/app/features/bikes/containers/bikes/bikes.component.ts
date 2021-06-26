import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BikeManufacturerProps } from 'src/app/shared/models';
import { BikeManufacturerService } from '../../store/manufacturer/manufacturer.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss'],
})
export class BikesComponent implements OnInit {
  constructor(
    private router: Router,
    private manufacturerService: BikeManufacturerService
  ) {}

  ngOnInit(): void {}

  isRoot(): boolean {
    return this.router.isActive('bikes', true);
  }

  isAddManufacturerForm(): boolean {
    return this.router.isActive('bikes/manufacturer/add', true);
  }

  postManufacturer(manufacturer: BikeManufacturerProps): void {
    this.manufacturerService.postManufacturer(manufacturer);
  }
}
