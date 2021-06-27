import {environment} from '../../../environments/environment';

export const API_RESSOURCE_URI = {
  // Auth
  LOGIN: environment.API_URL + '/auth/login/',
  // Users
  GET_USERS: environment.API_URL + '/user/',
  GET_CURRENT_USER: environment.API_URL + '/user/current', // TODO use /user/:id but it's not ready
  DELETE_USER: environment.API_URL + '/user/',
  PUT_USER: environment.API_URL + '/user/',
  POST_USER: environment.API_URL + '/user/',
  // Stations
  BASE_STATIONS: environment.API_URL + '/station/',
  //Station monitoring
  STATION_MONITORING: environment.API_URL + '/station-monitoring/',
  OSM_SEARCH_ADDRESS: 'https://nominatim.openstreetmap.org/search.php?'
};
