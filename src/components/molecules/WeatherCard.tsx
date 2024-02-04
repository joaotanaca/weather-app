import React, { useCallback, useMemo, useState } from "react";
import { TbReload } from "react-icons/tb";
import Icon from "../atom/icon";

type TCard = {
    name: string;
    className?: string;
    temperature: string;
    weatherCode: string;
    handleRefresh: () => Promise<void>;
};

const WeatherCard = ({
    name,
    temperature,
    className,
    handleRefresh,
}: TCard) => {
    const [refresh, setRefresh] = useState(false);

    const handleClick = useCallback(async () => {
        setRefresh(true);
        await handleRefresh();
        setRefresh(false);
    }, []);

    return (
        <article
            className={`${className} w-60 flex flex-col justify-between items-center gap-5 p-5 px-6 rounded-xl dark:bg-[#1B1B1D] bg-neutral-100 text-neutral-700 dark:text-white transition-all shadow-sm hover:shadow-md md:hover:-translate-y-1 md:hover:text-primary-600 border-1 md:hover:border-primary-600 border-neutral-300 md:border-none md:border-0`}
        >
            <header className="w-full flex justify-between text-lg font-semibold">
                {name}
                <button
                    className={`${refresh ? "animate-[spin_500ms_ease_infinite]" : ""
                        }`}
                    onClick={handleClick}
                >
                    <TbReload size={20} />
                </button>
            </header>
            <Icon name="fog" size={120} />
            <footer className="flex justify-center text-2xl font-normal">
                {temperature}
            </footer>
        </article>
    );
};

export default WeatherCard;
