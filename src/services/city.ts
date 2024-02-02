import { geolocationAPI } from "../http";
import type { CityResponse } from "../interface/cityResponse";

async function search(query: string) {
    return await geolocationAPI.get<CityResponse[]>("/direct", {
        params: { q: query },
    });
}

async function getCity(latitude: number, longitude: number) {
    return await geolocationAPI.get<CityResponse[]>("/reverse", {
        params: { lat: latitude, lon: longitude },
    });
}

export default {
    search,
    getCity,
};
