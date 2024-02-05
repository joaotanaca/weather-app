import React, { useMemo } from 'react';
import Icon, { IconsName } from '../atom/icon';
import Dropdown from '../molecules/Dropdown';
import { FiCloudDrizzle, FiRefreshCcw, FiTrash, FiWind } from 'react-icons/fi';
import { WiHumidity } from 'react-icons/wi';
import forecasts from '@/store/forecasts';
import { observer } from 'mobx-react';
import weather from '@/constants/weather';
import { WeatherCode } from '@/interface/weatherCode';

type TWeatherCard = {
  id: string;
  name: string;
  className?: string;
  temperature: string;
  weatherCode: WeatherCode;
  isDay: boolean;
  windSpeed: number;
  precipitation: string;
  humidity: number;
};

const WeatherCard = observer(
  ({ id, name, temperature, className, weatherCode, isDay, precipitation, windSpeed, humidity }: TWeatherCard) => {
    const weatherIcon = useMemo(
      () =>
        (weatherCode <= 4 ? `${isDay ? 'sun' : 'moon'}_${weather[weatherCode]}` : weather[weatherCode]) as IconsName,
      [isDay, weatherCode],
    );

    const OPTIONS = [
      {
        icon: <FiRefreshCcw size={16} />,
        title: 'Recarregar',
        onClick: () => forecasts.updateForecastCity(id),
      },
      {
        icon: <FiTrash size={16} />,
        title: 'Remover',
        className: 'hover:bg-critical-200 hover:text-critical-600 hover:dark:text-critical-600',
        onClick: () => forecasts.removeForecast(id),
      },
    ];

    return (
      <article
        className={`${className} w-60 flex flex-col justify-between items-center gap-5 p-5 px-6 rounded-xl dark:bg-[#1B1B1D] bg-neutral-100 text-neutral-700 dark:text-white transition-all shadow-sm hover:shadow-md md:hover:-translate-y-1 md:hover:text-primary-600 border-1 md:hover:border-primary-600 border-neutral-300 md:border-none md:border-0`}
      >
        <header className="w-full flex items-center justify-between text-lg font-semibold">
          {name}
          <Dropdown className="min-w-fit px-3 translate-x-2 border-none" options={OPTIONS} />
        </header>
        <Icon name={weatherIcon} size={120} />
        <footer className="w-full flex flex-col gap-4 justify-center items-center text-2xl font-normal">
          {temperature}
          <div className="w-full flex justify-around text-base">
            <div
              aria-label={`Velocidade do vento: ${windSpeed}km/h`}
              title={`Velocidade do vento: ${windSpeed}km/h`}
              className="flex gap-1 flex-col items-center"
            >
              <FiWind size={20} />
              {windSpeed}km/h
            </div>
            <div
              aria-label={`Humidade: ${humidity}%`}
              title={`Humidade: ${humidity}%`}
              className="flex gap-1 flex-col items-center"
            >
              <WiHumidity size={20} />
              {humidity}%
            </div>
            <div
              aria-label={`Precipitação: ${precipitation}mm`}
              title={`Precipitação: ${precipitation}mm`}
              className="flex gap-1 flex-col items-center"
            >
              <FiCloudDrizzle size={20} />
              {precipitation}mm
            </div>
          </div>
        </footer>
      </article>
    );
  },
);

export default WeatherCard;
