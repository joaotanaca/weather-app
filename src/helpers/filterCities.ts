import { CityResponse } from '@/interface/cityResponse';
import { v4 as uuid } from 'uuid';

/**
 * The function filters an array of city responses based on unique combinations of country and state.
 * @param {CityResponse[]} cities - An array of objects representing cities. Each city object should
 * have the following properties:
 * @returns an array of CityResponse objects.
 */
export default (cities: CityResponse[]) => {
  return cities.reduce((prev: CityResponse[], current: CityResponse) => {
    if (!(prev.some(({ country }) => country === current.country) && prev.some((p) => p?.state === current?.state))) {
      prev.push({ ...current, id: uuid() });
    }
    return prev;
  }, []);
};
