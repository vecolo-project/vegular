import {props, createAction} from '@datorama/akita-ng-effects';
import {User} from '../models/user.model';

export const loginSuccess = createAction('[Login] login success',
  props<User>());
export const loginFail = createAction('[Login] login fail');
export const login = createAction('[Login] login',
  props<{ email: string; password: string }>());
