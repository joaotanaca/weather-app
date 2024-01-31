import React, { useMemo } from "react";
import { TbReload } from "react-icons/tb";
import Icon from "../atom/icon";
import { observer } from "mobx-react";
import forecasts from "../../store/forecasts";
import convertCelsiusToFahreneit from "../helper/convertCelsiusToFahreneit";
type TCard = {
    name: string;
    weatherCode: string;
    temperature: number;
    handleClick: () => void;
};

const Card = ({ name, temperature: temp, weatherCode, handleClick }: TCard) => {
    const temperature = useMemo(
        () =>
            forecasts.scaleTemperature === "celsius"
                ? `${temp}°C`
                : `${convertCelsiusToFahreneit(temp)}°F`,
        [forecasts.scaleTemperature],
    );

    return (
        <article className="max-w-60 flex flex-col items-center gap-5 p-5 rounded-[20px] backdrop-blur-[34px]  shadow-md dark:bg-[#1B1B1D] bg-[#C9E5FF] text-[#296399] dark:text-white font-nunito-sans">
            <header className="w-full flex justify-between text-lg font-semibold">
                {name}
                <button onClick={handleClick}>
                    <TbReload />
                </button>
            </header>
            <Icon name="frezzing_drizzle" size={120} />
            <footer className="flex justify-center text-2xl">
                {temperature}
            </footer>
        </article>
    );
};

export default observer(Card);
