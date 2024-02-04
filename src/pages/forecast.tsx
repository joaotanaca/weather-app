import React from "react";
import { RiMapPinAddFill } from "react-icons/ri";
import WeatherCard from "../components/organisms/WeatherCard";
import forecasts from "../store/forecasts";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { WeatherCode } from "../interface/weatherCode";
import { FiNavigation } from "react-icons/fi";
import tailwind from "../constants/colors/tailwind";

const Forecast = observer(() => {
    return (
        <div className="flex flex-wrap justify-around px-2 md:justify-start gap-4">
            <Link
                to="/add-forecast"
                className="w-60 min-h-60 h-auto hidden md:flex justify-center items-center gap-5 p-6 rounded-[20px] backdrop-blur-[34px] dark:bg-[#1B1B1D] bg-neutral-100 text-[#60b0fc] border-[1px] border-neutro dark:text-white transition-all cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-1"
            >
                <RiMapPinAddFill size={60} />
            </Link>
            {forecasts.forecasts.length
                ? forecasts.forecasts.map(
                    ({ id, name, temperature_2m, country, is_day, weather_code }) => (
                        <WeatherCard
                            key={id}
                            id={id}
                            name={`${name}, ${country}`}
                            temperature={`${temperature_2m}°C`}
                            weatherCode={weather_code as WeatherCode}
                            isDay={Boolean(is_day)}
                        />
                    ),
                )
                : <div className="flex flex-col items-center justify-center w-full md:hidden gap-2 text-center mt-8">
                    <div className="bg-neutral-200 p-4 rounded-full mb-4">
                        <FiNavigation className="translate-y-[2px]" size={28} color={tailwind.neutral[600]} />
                    </div>
                    <h2 className="text-neutral-900 dark:text-white font-semibold text-2xl">Sem localidades</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 font-normal">Adicione localidades para visualizar suas temperaturas.</p>
                </div>}
        </div>
    );
});

export default Forecast;
