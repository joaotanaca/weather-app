import { makeAutoObservable } from "mobx";

export type TScaleTemperature = "fahrenheit" | "celsius";

class Forecasts {
    forecasts: {}[] = [];
    scaleTemperature: TScaleTemperature = "celsius";

    constructor() {
        makeAutoObservable(this);
    }

    toggleScale = () => {
        if (this.scaleTemperature === "celsius") {
            this.scaleTemperature = "fahrenheit";
        } else {
            this.scaleTemperature = "celsius";
        }
    };

    addForecast = () => {
        this.forecasts.push();
    };

    removeForecast = () => {
        this.forecasts = this.forecasts.filter(() => {});
    };
}

export default new Forecasts();
