import React from "react";
import { RiMapPinAddFill } from "react-icons/ri";
import WeatherCard from "../components/organisms/WeatherCard";
import forecasts from "../store/forecasts";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const Forecast = () => {
    return (
        <div className="flex flex-wrap justify-around px-2 md:justify-start gap-4">
            <Link
                to="/add-forecast"
                className="w-60 h-auto hidden md:flex justify-center items-center gap-5 p-6 rounded-[20px] backdrop-blur-[34px] dark:bg-[#1B1B1D] bg-neutral-100 text-[#60b0fc] border-[1px] border-neutro dark:text-white transition-all cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-1"
            >
                <RiMapPinAddFill size={60} />
            </Link>
            {forecasts.forecasts.length
                ? forecasts.forecasts.map(
                    ({ id, name, temperature_2m, country }) => (
                        <WeatherCard
                            key={id}
                            name={`${name}, ${country}`}
                            temperature={`${temperature_2m}°C`}
                            weatherCode="2"
                            handleRefresh={async () =>
                                await forecasts.updateForecastCity(id)
                            }
                        />
                    ),
                )
                : null}
        </div>
    );
};

export default observer(Forecast);
