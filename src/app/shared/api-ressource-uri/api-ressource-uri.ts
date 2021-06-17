import { environment } from '../../../environments/environment';

export const API_RESSOURCE_URI = {
  LOGIN: environment.API_URL + '/auth/login/',
  GET_USERS: environment.API_URL + '/user/',
  GET_USER: environment.API_URL + '/user/current', // TODO use /user/:id but it's not ready
  DELETE_USER: environment.API_URL + '/user/',
};
