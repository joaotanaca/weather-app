import React from "react";
import WeatherCard from "../../components/molecules/WeatherCard";
import forecasts from "../../store/forecasts";

const Forecast = () => {
    return (
        <div>
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
