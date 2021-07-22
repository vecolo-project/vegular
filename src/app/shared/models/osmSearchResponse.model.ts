export type OsmSearchResponse = {
  address: {
    city: string;
    town: string;
    city_district: string;
    country: string;
    country_code: string;
    county: string;
    house_number: string;
    municipality: string;
    postcode: string;
    road: string;
    state: string;
    suburb: string;
  };
  lat: number;
  lon: number;
  osm_type: string;
  type: string;
};
