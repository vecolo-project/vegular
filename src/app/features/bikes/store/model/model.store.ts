import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {BikeModel} from 'src/app/shared/models';

export interface BikeModelState extends EntityState<BikeModel, number> {
  count: number;
  editModel: BikeModel;
}

export function createInitialState(): BikeModelState {
  return {
    count: 0,
    editModel: undefined,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'BikeModel' })
export class BikeModelStore extends EntityStore<BikeModelState, BikeModel> {
  constructor() {
    super(createInitialState());
  }
}
