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
        API_RESSOURCE_URI.BASE_MODELS
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

  async getModel(id: number): Promise<void> {
    this.bikeModelStore.setLoading(true);
    try {
      const response = await this.http.get<BikeModel>(
        API_RESSOURCE_URI.BASE_MODELS + id
      );
      this.bikeModelStore.update({ editModel: response });
    } catch (e) {
      this.bikeModelStore.set({ editModel: null });
      this.snackBar.warnning(
        'Erreur lors de la récupération du modèle : ' + e.error.error
      );
    } finally {
      this.bikeModelStore.setLoading(false);
    }
  }

  async postModel(model: BikeModelProps) {
    this.bikeModelStore.setLoading(true);
    try {
      const response = await this.http.post<BikeModel>(
        API_RESSOURCE_URI.BASE_MODELS,
        model
      );
      this.bikeModelStore.update({ editModel: response });
    } catch (err) {
      this.snackBar.warnning(
        "Erreur lors de l'ajout du modèle : " + err.error.error
      );
    } finally {
      this.bikeModelStore.setLoading(false);
    }
  }

  async uploadImage(formData: FormData, id: number): Promise<void> {
    formData.forEach((item) => console.log(item));
    try {
      await this.http.upload(
        API_RESSOURCE_URI.BASE_MODELS + 'add-image/' + id,
        formData
      );
      this.snackBar.success('Le fichier a bien été envoyer');
    } catch (e) {
      this.snackBar.warnning(e.error.error);
    }
  }

  async putModel(model: BikeModelProps, id: number): Promise<void> {
    this.bikeModelStore.setLoading(true);
    try {
      const response = await this.http.put<BikeModel>(
        API_RESSOURCE_URI.BASE_MODELS + id,
        model
      );
      this.bikeModelStore.update({ editModel: response });
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la modification du modèle : ' + e.error.error
      );
    } finally {
      this.bikeModelStore.setLoading(false);
    }
  }

  async deleteModel(id: number): Promise<void> {
    this.bikeModelStore.setLoading(true);
    try {
      console.log(API_RESSOURCE_URI.BASE_MODELS + id);
      await this.http.delete(API_RESSOURCE_URI.BASE_MODELS + id);
      this.bikeModelStore.remove(id);
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la suppression du model : ' + e.error.error
      );
    } finally {
      this.bikeModelStore.setLoading(false);
    }
  }
}
