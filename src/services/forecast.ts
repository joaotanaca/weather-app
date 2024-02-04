import { WeatherApiResponse } from "@openmeteo/sdk/weather-api-response";
import { forecastAPI } from "../http";

/**
 * The function "today" retrieves the weather forecast current for a given latitude and longitude.
 * @param {string | number} latitude - The latitude parameter is used to specify the geographic
 * latitude of the location for which you want to retrieve the weather forecast. It can be either a
 * string or a number.
 * @param {string | number} longitude - The `longitude` parameter represents the geographic coordinate
 * that specifies the east-west position of a point on the Earth's surface.
 * @returns a promise that resolves to the response from the forecastAPI.get method.
 */
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
