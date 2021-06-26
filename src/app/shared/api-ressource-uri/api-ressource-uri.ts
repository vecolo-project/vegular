import { environment } from '../../../environments/environment';

export const API_RESSOURCE_URI = {
  LOGIN: environment.API_URL + '/auth/login/',
  GET_USERS: environment.API_URL + '/user/',
  GET_CURRENT_USER: environment.API_URL + '/user/current',
  DELETE_USER: environment.API_URL + '/user/',
  PUT_USER: environment.API_URL + '/user/',
  POST_USER: environment.API_URL + '/user/',
};
