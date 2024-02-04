import React, { useMemo } from "react";
import Icon, { IconsName } from "../atom/icon";
import Dropdown from "../molecules/Dropdown";
import { FiRefreshCcw } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";
import forecasts from "@/store/forecasts";
import { observer } from "mobx-react";
import weather from "@/constants/weather";
import { WeatherCode } from "@/interface/weatherCode";

type TWeatherCard = {
    id: string
    name: string;
    className?: string;
    temperature: string;
    weatherCode: WeatherCode;
    isDay: boolean;
};

const WeatherCard = observer(({
    id,
    name,
    temperature,
    className,
    weatherCode,
    isDay
}: TWeatherCard) => {
    const weatherIcon = useMemo(() => (weatherCode <= 4 ? `${isDay ? "sun" : "moon"}_${weather[weatherCode]}` : weather[weatherCode]) as IconsName, [isDay, weatherCode])
    return (
        <article
            className={`${className} w-60 flex flex-col justify-between items-center gap-5 p-5 px-6 rounded-xl dark:bg-[#1B1B1D] bg-neutral-100 text-neutral-700 dark:text-white transition-all shadow-sm hover:shadow-md md:hover:-translate-y-1 md:hover:text-primary-600 border-1 md:hover:border-primary-600 border-neutral-300 md:border-none md:border-0`}
        >
            <header className="w-full flex items-center justify-between text-lg font-semibold">
                {name}
                <Dropdown className="min-w-fit px-3 translate-x-2 border-none" options={[
                    {
                        icon: <FiRefreshCcw size={16} />,
                        title: "Recarregar",
                        onClick: () => forecasts.updateForecastCity(id)
                    },
                    {
                        icon: <FiTrash size={16} />,
                        title: "Remover",
                        className: "hover:bg-critical-200 hover:text-critical-600 hover:dark:text-critical-600",
                        onClick: () => forecasts.removeForecast(id)
                    }
                ]} />
            </header>
            <Icon name={weatherIcon} size={120} />
            <footer className="flex justify-center text-2xl font-normal">
                {temperature}
            </footer>
        </article>
    );
});

export default WeatherCard;
