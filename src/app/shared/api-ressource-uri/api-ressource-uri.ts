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
  BASE_STATIONS: environment.API_URL + '/station/',
  // MAP
  OSM_SEARCH_ADDRESS: 'https://nominatim.openstreetmap.org/search.php?',
  //Station monitoring
  STATION_MONITORING: environment.API_URL + '/station-monitoring/',
  //BIKE
  BASE_BIKE: environment.API_URL + '/bike/',
  BIKE_STATION: environment.API_URL + '/bike/station/',
  //RIDE
  BASE_RIDE: environment.API_URL + '/ride/',
  RIDE_STATION: environment.API_URL + '/ride/station/',
  // MANUFACTURER
  POST_BIKE_MANUFACTURER: environment.API_URL + '/bike-manufacturer',
  GET_BIKE_MANUFACTURERS: environment.API_URL + '/bike-manufacturer',
  GET_BIKE_MANUFACTURER: environment.API_URL + '/bike-manufacturer/',
  DELETE_MANUFACTURER: environment.API_URL + '/bike-manufacturer/',
  PUT_MANUFACTURER: environment.API_URL + '/bike-manufacturer/',
  // MODELS
  BASE_MODELS: environment.API_URL + '/bike-model/',
  // PLAN
  BASE_PLAN: environment.API_URL + '/plan/',
  // SUBSCRIPTION
  BASE_SUBSCRIPTION: environment.API_URL + '/subscription/',
};
