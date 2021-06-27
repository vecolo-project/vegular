import { Injectable } from '@angular/core';
import { HttpClientWrapper } from 'src/app/core/utils/httpClientWrapper';
import { BikeModel, BikeModelProps } from 'src/app/shared/models';
import { Snackbar } from 'src/app/shared/snackbar/snakbar';
import { API_RESSOURCE_URI } from '../../../../shared/api-ressource-uri/api-ressource-uri';
import { BikeModelQuery } from './model.query';
import { BikeModelStore } from './model.store';

@Injectable({ providedIn: 'root' })
export class BikeModelService {
  constructor(
    private bikeModelStore: BikeModelStore,
    private http: HttpClientWrapper,
    private snackBar: Snackbar,
    private bikeModelQuery: BikeModelQuery
  ) {}

  async getModels() {
    this.bikeModelStore.setLoading(true);
    try {
      const response = await this.http.get<BikeModel[]>(
        API_RESSOURCE_URI.GET_BIKE_MANUFACTURERS
      );
      this.bikeModelStore.set(response);
      this.bikeModelStore.update({ count: response.length });
    } catch (e) {
      this.bikeModelStore.set([]);
      this.snackBar.warnning(
        'Erreur lors de la récupération des modèles : ' + e.error.error
      );
    } finally {
      this.bikeModelStore.setLoading(false);
    }
  }

  getModel(id: number) {
    throw new Error('Method not implemented.');
  }

  async postModel(model: BikeModelProps) {
    this.bikeModelStore.setLoading(true);
    try {
      const response = await this.http.post<BikeModel>(
        API_RESSOURCE_URI.POST_BIKE_MANUFACTURER,
        model
      );
      this.bikeModelStore.update({ editModel: response });
    } catch (err) {
      this.snackBar.warnning(
        "Erreur lors de l'ajout du fabriquant : " + err.error.error
      );
    } finally {
      this.bikeModelStore.setLoading(false);
    }
  }

  putModel(model: BikeModel, id: number) {
    throw new Error('Method not implemented.');
  }
}
