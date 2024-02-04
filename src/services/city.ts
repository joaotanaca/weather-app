import { geolocationAPI } from '@/http';
import type { CityResponse } from '@/interface/cityResponse';

/**
 * The function `search` uses the geolocation API to search for cities based on a given query.
 * @param {string} query - The query parameter is a string that represents the search query for a city.
 * It is used to search for cities based on the provided query.
 * @returns a promise that resolves to an array of CityResponse objects.
 */
async function search(query: string) {
  return await geolocationAPI.get<CityResponse[]>('/direct', {
    params: { q: query },
  });
}

/**
 * The function `getCity` uses the geolocation API to retrieve the city information based on the given
 * latitude and longitude coordinates.
 * @param {number} latitude - The latitude parameter represents the geographic coordinate of a location
 * on the Earth's surface, measured in degrees north or south of the equator. It specifies the
 * north-south position of the location.
 * @param {number} longitude - The `longitude` parameter represents the longitude coordinate of a
 * location. It is a numerical value that specifies the east-west position of a point on the Earth's
 * surface relative to the Prime Meridian. The longitude values range from -180 degrees to 180 degrees,
 * with 0 degrees representing the Prime Mer
 * @returns a promise that resolves to an array of `CityResponse` objects.
 */
async function getCity(latitude: number, longitude: number) {
  return await geolocationAPI.get<CityResponse[]>('/reverse', {
    params: { lat: latitude, lon: longitude },
  });
}

export default {
  search,
  getCity,
};
