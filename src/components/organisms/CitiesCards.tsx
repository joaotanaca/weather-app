import React, { useMemo } from "react";
import { CityResponse } from "../../interface/cityResponse";
import ToggleCard from "../molecules/ToggleCard";
import city, { INITIAL_CITY_TYPE } from "../../store/city";
import { runInAction } from "mobx";

const CitiesCards = ({ cities }: { cities: CityResponse[] }) => {
    const cards = useMemo(
        () =>
            cities.map((currentCity) => (
                <ToggleCard
                    key={currentCity.id}
                    active={city.citySelected.id === currentCity.id}
                    onClick={() =>
                        runInAction(
                            () =>
                                (city.citySelected =
                                    currentCity as unknown as INITIAL_CITY_TYPE),
                        )
                    }
                    title={currentCity.name}
                    titleDetails={`${
                        currentCity.state ? `${currentCity.state}, ` : ""
                    } ${currentCity.country}`}
                    description={`Latitude: ${currentCity.lat}, Longitude: ${currentCity.lon}`}
                />
            )),
        [cities, city.citySelected.id],
    );
    return <>{cards}</>;
};

export default CitiesCards;
