import React, { useCallback, useMemo, useState } from "react";
import { TbReload } from "react-icons/tb";
import Icon from "../atom/icon";
import { observer } from "mobx-react";
import forecasts from "../../store/forecasts";
import convertCelsiusToFahreneit from "../../helpers/convertCelsiusToFahreneit";
type TCard = {
    name: string;
    weatherCode: string;
    temperature: number;
    handleClick: () => void;
};

const Card = ({ name, temperature: temp, weatherCode, handleClick }: TCard) => {
    const [refresh, setRefresh] = useState(false);

    const temperature = useMemo(
        () =>
            forecasts.scaleTemperature === "celsius"
                ? `${temp}°C`
                : `${convertCelsiusToFahreneit(temp)}°F`,
        [forecasts.scaleTemperature],
    );

    const handleRefresh = useCallback(() => {
        handleClick();
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false);
        }, 500);
    }, []);

    return (
        <article
            className="w-60 flex flex-col items-center gap-5 p-6 
        rounded-[20px] backdrop-blur-[34px] 
        shadow-md hover:shadow-md hover:border-[#296399] hover:dark:border-white border-[#C9E5FF] dark:border-[#1B1B1D] border-[1px] 
        dark:bg-[#1B1B1D] bg-[#C9E5FF] text-[#296399] dark:text-white 
        font-nunito-sans transition-all cursor-pointer"
        >
            <header className="w-full flex justify-between text-lg font-semibold">
                {name}
                <button
                    className={
                        refresh ? "animate-[spin_500ms_ease_infinite]" : ""
                    }
                    onClick={handleRefresh}
                >
                    <TbReload size={20} />
                </button>
            </header>
            <Icon name="fog" size={120} />
            <footer className="flex justify-center text-2xl">
                {temperature}
            </footer>
        </article>
    );
};

export default observer(Card);
