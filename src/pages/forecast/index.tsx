import React from "react";
import Card from "../../components/molecules/WeatherCard";
import forecasts from "../../store/forecasts";

const Forecast: React.FC = () => {
    return (
        <div>
            <Card
                name="São Vicente"
                temperature={40}
                weatherCode="2"
                handleClick={forecasts.toggleScale}
            />
        </div>
    );
};

export default Forecast;
