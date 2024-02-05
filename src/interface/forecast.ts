import { CityResponse } from './cityResponse';

export type TForecast = CityResponse & {
  id: string;
  country: string;
  interval: number;
  is_day: number;
  lat: number;
  lon: number;
  name: string;
  relative_humidity_2m: number;
  state: string;
  temperature_2m: number;
  time: string;
  weather_code: number;
  wind_direction_10m: number;
  wind_gusts_10m: number;
  wind_speed_10m: number;
  precipitation: string;
};
