import axios from "axios";

const BASE_URL_FORECAST = "https://api.open-meteo.com/v1";
const BASE_URL_GEOLOCATION = "http://api.openweathermap.org/geo/1.0";

export const forecastAPI = axios.create({ baseURL: BASE_URL_FORECAST });

export const geolocationAPI = axios.create({
    baseURL: BASE_URL_GEOLOCATION,
    params: {
        limit: 10,
        appid: "511b8750c2d1fe59a7aac99a987cca55",
    },
});
