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

async function daily(latitude: string | number, longitude: string | number) {
    return await forecastAPI.get<WeatherApiResponse>("forecast", {
        params: {
            latitude,
            longitude,
            daily: "weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunshine_duration,precipitation_sum,rain_sum,showers_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant",
            forecast_days: 14,
        },
    });
}

export default {
    today,
    daily,
};
