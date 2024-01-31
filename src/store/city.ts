import { action, makeObservable, observable } from "mobx";
import { CityResponse } from "../interface/cityResponse";
import city from "../services/city";

class City {
    cities: CityResponse[] = [];
    private timer: number | null = null;

    constructor() {
        makeObservable(this, {
            cities: observable,
            search: action.bound,
        });
    }

    search = (query: string) => {
        if (!query) {
            this.cities = [];
            return;
        }
        if (this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(async () => {
            const { data } = await city.search(query);
            console.log(data);
        }, 1000);
    };
}

export default new City();
