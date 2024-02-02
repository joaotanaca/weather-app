import { WeatherApiResponse } from "@openmeteo/sdk/weather-api-response";
import { forecastAPI } from "../http";

async function today(latitude: string | number, longitude: string | number) {
    return await forecastAPI.get<WeatherApiResponse>("forecast", {
        params: {
            latitude,
            longitude,
            current:
                "temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m",
        },
    });
}

export default {
    today,
};
