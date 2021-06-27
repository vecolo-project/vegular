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
      this.snackBar.warnning(
        "Erreur lors de l'ajout du fabriquant : " + err.error.error
      );
    } finally {
      this.bikeManufacturerStore.setLoading(false);
    }
  }
  async getManufacturers(): Promise<void> {
    this.bikeManufacturerStore.setLoading(true);
    try {
      const response = await this.http.get<BikeManufacturer[]>(
        API_RESSOURCE_URI.GET_BIKE_MANUFACTURERS
      );
      this.bikeManufacturerStore.set(response);
      this.bikeManufacturerStore.update({ count: response.length });
    } catch (e) {
      this.bikeManufacturerStore.set([]);
      this.snackBar.warnning(
        'Erreur lors de la récupération des fabriquants : ' + e.error.error
      );
    } finally {
      this.bikeManufacturerStore.setLoading(false);
    }
  }

  async getManufacturer(id: number): Promise<void> {
    this.bikeManufacturerStore.setLoading(true);
    try {
      const response = await this.http.get<BikeManufacturer>(
        API_RESSOURCE_URI.GET_BIKE_MANUFACTURER + id
      );
      this.bikeManufacturerStore.update({ editManufacturer: response });
    } catch (e) {
      this.bikeManufacturerStore.set({ editManufacturer: null });
      this.snackBar.warnning(
        'Erreur lors de la récupération du fabriquant : ' + e.error.error
      );
    } finally {
      this.bikeManufacturerStore.setLoading(false);
    }
  }

  async deleteManufacturer(id: number): Promise<void> {
    this.bikeManufacturerStore.setLoading(true);
    try {
      await this.http.delete(API_RESSOURCE_URI.DELETE_MANUFACTURER + id);
      this.bikeManufacturerStore.remove(id);
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la suppression du fabriquant : ' + e.error.error
      );
    } finally {
      this.bikeManufacturerStore.setLoading(false);
    }
  }

  async putManufacturer(
    manufacturer: BikeManufacturerProps,
    id: number
  ): Promise<void> {
    this.bikeManufacturerStore.setLoading(true);
    try {
      const response = await this.http.put<BikeManufacturer>(
        API_RESSOURCE_URI.PUT_MANUFACTURER + id,
        manufacturer
      );
      this.bikeManufacturerStore.update({ editManufacturer: response });
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la modification du fabriquant : ' + e.error.error
      );
    } finally {
      this.bikeManufacturerStore.setLoading(false);
    }
  }
}
