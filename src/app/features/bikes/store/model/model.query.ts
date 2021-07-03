import {Injectable} from '@angular/core';
import {HashMap, QueryEntity} from '@datorama/akita';
import {Observable} from 'rxjs';
import {BikeModel} from 'src/app/shared/models';
import {BikeModelState, BikeModelStore} from './model.store';

@Injectable({ providedIn: 'root' })
export class BikeModelQuery extends QueryEntity<BikeModelState, BikeModel> {
  selectModel$: Observable<HashMap<BikeModel>> = this.select('entities');
  selectModelArray$: Observable<BikeModel[]> = this.selectAll();
  selectEditModel$: Observable<BikeModel> = this.select('editModel');
  selectIds$: Observable<number[]> = this.select('ids');
  selectCount$: Observable<number> = this.select('count');
  isLoading$: Observable<boolean> = this.select('loading');

  constructor(protected store: BikeModelStore) {
    super(store);
  }

  setEditModel(id: number): void {
    this.store.update({ editModel: this.getEntity(id) });
  }
}
