import { TForecast } from '@/interface/forecast';
import { INITIAL_CITY_TYPE } from '@/store/city';

export default (forecasts: TForecast[], city: INITIAL_CITY_TYPE) =>
  forecasts.find(({ country, state, name }) => city.country === country && city.state === state && city.name === name);
