import React, { useCallback, useMemo } from 'react';
import Input from '../atom/Input';
import { FiMapPin } from 'react-icons/fi';
import { observer } from 'mobx-react';
import city from '@/store/city';

const InputGroupLocation = observer(() => {
  const handleGetLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        city.handleUpdateCitySelected('name', '');
        city.handleUpdateCitySelected('lat', latitude);
        city.handleUpdateCitySelected('lon', longitude);
      });
    }
  }, []);

  const buttonLocation = useMemo(
    () => (
      <button className="rounded-2xl px-2 md:pb-[10px]" onClick={handleGetLocation}>
        <FiMapPin size={24} />
      </button>
    ),
    [handleGetLocation],
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-2">
        <Input
          label="Latitude"
          containerClassname="w-full"
          name="latitude"
          placeholder="Latitude"
          value={city.citySelected.lat}
          onChange={(event) => city.handleUpdateCitySelected('lat', event.currentTarget.value)}
        />
        <Input
          label="Longitude"
          containerClassname="w-full"
          name="longitude"
          placeholder="Longitude"
          value={city.citySelected.lon}
          onChange={(event: { currentTarget: { value: unknown } }) =>
            city.handleUpdateCitySelected('lon', event.currentTarget.value)
          }
        />
        <div className="items-end hidden md:flex">{buttonLocation}</div>
      </div>
      <div className="my-4 w-4/5 md:w-1/3 bg-slate-600 dark:bg-slate-400 dark:h-[2px] bg-opacity-25 h-[1px] mx-auto" />
      <div className="grid grid-cols-12 gap-2 items-center">
        <Input
          containerClassname="col-span-10 md:col-span-12"
          placeholder="Cidade"
          name="city"
          value={city.citySelected.name}
          onChange={(event) => city.handleUpdateCitySelected('name', event.currentTarget.value)}
        />
        <div className="flex justify-center md:hidden -mb-1.5 col-span-2">{buttonLocation}</div>
      </div>
    </div>
  );
});

export default InputGroupLocation;
