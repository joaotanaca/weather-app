import React from "react";
import { RiMapPinAddFill } from "react-icons/ri";
import WeatherCard from "../../components/molecules/WeatherCard";
import forecasts from "../../store/forecasts";
import { Link } from "react-router-dom";

const Forecast = () => {
    return (
        <div className="flex gap-4">
            <Link
                to="/add-forecast"
                className="w-60 h-60 flex items-center justify-center
            p-6 rounded-[20px] backdrop-blur-[34px] shadow-md
            hover:shadow-2xl hover:border-[#296399] hover:dark:border-white border-transparent  hover:border-[1px]
            bg-[#C9E5FF] text-[#296399] dark:bg-[#1B1B1D] dark:text-white 
            font-nunito-sans transition-all cursor-pointer"
            >
                <RiMapPinAddFill size={60} />
            </Link>
            <WeatherCard
                name="São Vicente"
                temperature={40}
                weatherCode="2"
                handleClick={forecasts.toggleScale}
            />
        </div>
    );
};

export default Forecast;
