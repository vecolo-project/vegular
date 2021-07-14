import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Plan } from 'src/app/shared/models';
import { ProfileState, ProfileStore } from './profile.store';

@Injectable({
  providedIn: 'root',
})
export default class ProfileQuery extends QueryEntity<ProfileState, Plan> {
  selectPlanArray$: Observable<Plan[]> = this.selectAll();
  constructor(protected store: ProfileStore) {
    super(store);
  }
}
