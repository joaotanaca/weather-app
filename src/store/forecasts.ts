import { action, makeObservable, observable, runInAction, toJS } from 'mobx';
import forecast from '@/services/forecast';
import secureLocalStorage from '@/lib/secureLocalStorage';
import city from './city';
import { TForecast } from '@/interface/forecast';
import { v4 as uuid } from 'uuid';

export type TScaleTemperature = 'fahrenheit' | 'celsius';

class Forecasts {
  forecasts: TForecast[] = [];
  cityStore: typeof city;
  constructor() {
    makeObservable(this, {
      cityStore: true,
      forecasts: observable,
      addForecast: action.bound,
      removeForecast: action.bound,
      updateForecastCity: action.bound,
    });
    this.cityStore = city;
    const localStorageForecast = secureLocalStorage.get('forecasts') as string;

    if (localStorageForecast) this.forecasts = JSON.parse(localStorageForecast);
  }

  addForecast = async () => {
    const { data } = await forecast.today(this.cityStore.citySelected.lat, this.cityStore.citySelected.lon);

    const forecastData = {
      ...data.current,
      ...city.citySelected,
      id: uuid(),
    } as unknown as TForecast;
    this.forecasts.push(forecastData);
    secureLocalStorage.set('forecasts', this.forecasts);
    this.cityStore.resetCitySelected();
  };

  removeForecast = (id: string) => {
    this.forecasts = this.forecasts.filter(({ id: identifier }) => identifier !== id);
    secureLocalStorage.set('forecasts', this.forecasts);
  };

  updateForecastCity = async (id: string) => {
    const index = this.forecasts.findIndex(({ id: identifier }) => identifier === id);
    const forecastSelect = toJS(this.forecasts)[index];

    const { data } = await forecast.today(forecastSelect.lat, forecastSelect.lon);
    runInAction(() => {
      const forecastData = {
        ...forecastSelect,
        ...data.current,
      } as TForecast;

      this.forecasts[index] = forecastData;
      secureLocalStorage.set('forecasts', this.forecasts);
    });
  };
}

export default new Forecasts();
