import { CityResponse } from "../interface/cityResponse";
import { v4 as uuid } from "uuid";
export default (cities: CityResponse[]) => {
    return cities.reduce((prev: CityResponse[], current: CityResponse) => {
        if (
            !(
                prev.some(({ country }) => country === current.country) &&
                prev.some((p) => p?.state === current?.state)
            )
        ) {
            prev.push({ ...current, id: uuid() });
        }
        return prev;
    }, []);
};
