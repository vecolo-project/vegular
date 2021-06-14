import { environment } from '../../../environments/environment';

export const API_RESSOURCE_URI = {
  LOGIN: environment.API_URL + '/auth/login/',
  GET_USERS: environment.API_URL + '/user/',
  DELETE_USER: environment.API_URL + '/user/',
};
