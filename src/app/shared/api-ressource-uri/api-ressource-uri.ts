import {environment} from '../../../environments/environment';

export const API_RESSOURCE_URI = {
  // Auth
  LOGIN: environment.API_URL + '/auth/login/',
  // Users
  GET_USERS: environment.API_URL + '/user/',
  GET_CURRENT_USER: environment.API_URL + '/user/current', // TODO use /user/:id but it's not ready
  DELETE_USER: environment.API_URL + '/user/',
  // Stations
  GET_STATIONS: environment.API_URL + '/station/',
};
