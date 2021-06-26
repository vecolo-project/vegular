import { environment } from '../../../environments/environment';

export const API_RESSOURCE_URI = {
  // Auth
  LOGIN: environment.API_URL + '/auth/login/',
  // Users
  GET_USERS: environment.API_URL + '/user/',
  GET_CURRENT_USER: environment.API_URL + '/user/current',
  DELETE_USER: environment.API_URL + '/user/',
  PUT_USER: environment.API_URL + '/user/',
  POST_USER: environment.API_URL + '/user/',
  // Stations
  GET_STATIONS: environment.API_URL + '/station/',

  // Bike
  POST_BIKE_MANUFACTURER: environment.API_URL + '/bike-manufacturer',
  GET_BIKE_MANUFACTURERS: environment.API_URL + '/bike-manufacturer',
  GET_BIKE_MANUFACTURER: environment.API_URL + '/bike-manufacturer',
  DELETE_MANUFACTURER: environment.API_URL + '/bike-manufacturer/',
  PUT_MANUFACTURER: environment.API_URL + '/bike-manufacturer/',
};
