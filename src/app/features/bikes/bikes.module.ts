import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikesComponent } from './containers/bikes/bikes.component';
import { BikesRoutingModule } from './bikes-routing.module';

import { SharedModule } from '../../shared/shared.module';
import { BikesListComponent } from './components/bikes-list/bikes-list.component';
import { BikesModelListComponent } from './components/bikes-model-list/bikes-model-list.component';
import { BikesManufacturerListComponent } from './components/bikes-manufacturer-list/bikes-manufacturer-list.component';
import { BikesManufacturerFormComponent } from './components/bikes-manufacturer-form/bikes-manufacturer-form.component';

@NgModule({
  declarations: [BikesComponent, BikesListComponent, BikesModelListComponent, BikesManufacturerListComponent, BikesManufacturerFormComponent],
  imports: [CommonModule, BikesRoutingModule, SharedModule],
})
export class BikesModule {}
