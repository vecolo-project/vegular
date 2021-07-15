import {environment} from '../../../environments/environment';

export const API_RESSOURCE_URI = {
  // Auth
  LOGIN: environment.API_URL + '/auth/login/',
  REGISTER: environment.API_URL + '/auth/register',
  // Users
  GET_USERS: environment.API_URL + '/user/',
  GET_CURRENT_USER: environment.API_URL + '/user/me',
  DELETE_USER: environment.API_URL + '/user/',
  PUT_USER: environment.API_URL + '/user/',
  POST_USER: environment.API_URL + '/user/',
  PUT_ME: environment.API_URL + '/user/me',
  CHANGE_PASSWORD: environment.API_URL + '/user/password',
  // Stations
  BASE_STATIONS: environment.API_URL + '/station/',
  // MAP
  OSM_SEARCH_ADDRESS: 'https://nominatim.openstreetmap.org/search.php?',
  // Station monitoring
  STATION_MONITORING: environment.API_URL + '/station-monitoring/',
  // BIKE
  BASE_BIKE: environment.API_URL + '/bike/',
  BIKE_WITH_STATION_AND_MODEL: environment.API_URL + '/bike/full/',
  BIKE_STATION: environment.API_URL + '/bike/station/',
  // RIDE
  BASE_RIDE: environment.API_URL + '/ride/',
  RIDE_STATION: environment.API_URL + '/ride/station/',
  RIDE_BIKE: environment.API_URL + '/ride/bike/',
  RIDE_USER: environment.API_URL + '/ride/user/',
  CURRENT_USER_RIDE: environment.API_URL + '/ride/me',
  // MANUFACTURER
  POST_BIKE_MANUFACTURER: environment.API_URL + '/bike-manufacturer',
  GET_BIKE_MANUFACTURERS: environment.API_URL + '/bike-manufacturer',
  GET_BIKE_MANUFACTURER: environment.API_URL + '/bike-manufacturer/',
  DELETE_MANUFACTURER: environment.API_URL + '/bike-manufacturer/',
  PUT_MANUFACTURER: environment.API_URL + '/bike-manufacturer/',
  // MODELS
  BASE_MODELS: environment.API_URL + '/bike-model/',
  UPLOAD_IMAGE_MODEL: environment.API_URL + '/uploads/bike-model/',
  // PLAN
  BASE_PLAN: environment.API_URL + '/plan/',
  PLAN_ACTIVE: environment.API_URL + '/plan/active',
  // SUBSCRIPTION
  BASE_SUBSCRIPTION: environment.API_URL + '/subscription/',
  USER_SUBSCRIPTION: environment.API_URL + '/subscription/user/',
  ADD_SUBSCRIPTION: environment.API_URL + '/subscription/add',
  CURRENT_USER_SUBSCRIPTION: environment.API_URL + '/subscription/me',
  CANCEL_SUBSCRIPTION: environment.API_URL + '/subscription/cancel/',
  // INVOICE
  BASE_INVOICE: environment.API_URL + '/invoice/',
  USER_INVOICE: environment.API_URL + '/invoice/user/',
  CURRENT_USER_INVOICE: environment.API_URL + '/invoice/me',
  // EMAIL
  BASE_EMAIL: environment.API_URL + '/email/',
  EMAIL_USER: environment.API_URL + '/email/simple',
  EMAIL_CONTACT: environment.API_URL + '/email/contact',
  EMAIL_NEWSLETTER: environment.API_URL + '/email/newsletter',

  // STATISTICS
  STATISTICS_SUBSCRIPTIONS: environment.API_URL + '/statistics/subscriptions',
  STATISTICS_INCOMES: environment.API_URL + '/statistics/incomes?',
  STATISTICS_USER_SUBSCRIPTIONS:
    environment.API_URL + '/statistics/user-subscriptions?',
  STATISTICS_RIDES: environment.API_URL + '/statistics/rides?',
  STATISTICS_STATIONS: environment.API_URL + '/statistics/stations',
  STATISTICS_BIKES: environment.API_URL + '/statistics/bikes',
};
