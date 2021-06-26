import { Injectable } from '@angular/core';
import { HttpClientWrapper } from 'src/app/core/utils/httpClientWrapper';
import { BikeManufacturer, BikeManufacturerProps } from 'src/app/shared/models';
import { Snackbar } from 'src/app/shared/snackbar/snakbar';
import { API_RESSOURCE_URI } from '../../../../shared/api-ressource-uri/api-ressource-uri';
import { BikeManufacturerQuery } from './manufacturer.query';
import { BikeManufacturerStore } from './manufacturer.store';

@Injectable({ providedIn: 'root' })
export class BikeManufacturerService {
  constructor(
    private bikeManufacturerStore: BikeManufacturerStore,
    private http: HttpClientWrapper,
    private snackBar: Snackbar,
    private bikeManufacturerQuery: BikeManufacturerQuery
  ) {}

  async postManufacturer(manufacturer: BikeManufacturerProps) {
    this.bikeManufacturerStore.setLoading(true);
    try {
      const response = await this.http.post<BikeManufacturer>(
        API_RESSOURCE_URI.POST_BIKE_MANUFACTURER,
        manufacturer
      );
      this.bikeManufacturerStore.update({ editManufacturer: response });
    } catch (err) {
      console.log(err);
      this.snackBar.warnning(
        "Erreur lors de l'ajout du fabriquant : " + err.error.error
      );
    } finally {
      this.bikeManufacturerStore.setLoading(false);
    }
  }
}