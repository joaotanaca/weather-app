import { action, makeObservable, observable, runInAction } from 'mobx';
import { AxiosError } from 'axios';
import { CityResponse } from '@/interface/cityResponse';
import city from '@/services/city';
import filterCities from '@/helpers/filterCities';
export type INITIAL_CITY_TYPE = typeof INITIAL_CITY;

const INITIAL_CITY = {
  id: null,
  name: '',
  lat: 0,
  lon: 0,
  country: '',
  state: '',
};

class City {
  cities: CityResponse[] = [];
  citySelected: INITIAL_CITY_TYPE = INITIAL_CITY;

  constructor() {
    makeObservable(this, {
      resetCitySelected: true,
      cities: observable,
      citySelected: observable,
      search: action.bound,
      handleUpdateCitySelected: action.bound,
    });
  }

  search = async (query: string) => {
    let response: CityResponse[];
    try {
      if (this.citySelected.name) {
        response = (await city.search(query)).data;
      } else {
        response = (await city.getCity(this.citySelected.lat, this.citySelected.lon)).data;
      }
      runInAction(() => {
        this.cities = filterCities(response);
      });
    } catch (err) {
      console.error((err as AxiosError).message);
    }
  };

  handleUpdateCitySelected = (key: keyof INITIAL_CITY_TYPE, value: unknown) => {
    this.citySelected = { ...this.citySelected, [key]: value };
  };

  resetCitySelected = () => {
    runInAction(() => {
      this.citySelected = INITIAL_CITY;
      this.cities = [];
    });
  };
}

export default new City();
